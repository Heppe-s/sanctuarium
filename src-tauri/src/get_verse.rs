use scraper::{Html, Selector};
use serde_json::{json, Value};

static SITE_URL: &str = "https://www.mundodoscatolicos.com.br/versiculo-do-dia/";

async fn get_document(url: &str) -> Result<Html, Error> {
    let resp = reqwest::get(url).await?;
    let html = resp.text().await?;

    Ok(Html::parse_document(html.as_str()))
}

async fn get_daily_verse_link() -> Result<String, Error> {
    let document = get_document(SITE_URL).await?;
    let link_selector = Selector::parse("article > a").unwrap();

    let element = document.select(&link_selector).next().unwrap();

    Ok(element.attr("href").unwrap().to_string())
}

#[tauri::command]
pub async fn get_verse() -> Result<Value, Error> {
    let link = get_daily_verse_link().await?;

    let document = get_document(link.as_str()).await?;

    let text_selector = Selector::parse("div.content > p:nth-child(6)").unwrap();
    let title_selector = Selector::parse("div.content > p:nth-child(7)").unwrap();

    let title: String = document
        .select(&title_selector)
        .next()
        .unwrap()
        .text()
        .collect();

    let text = document
        .select(&text_selector)
        .flat_map(|el| el.text())
        .collect::<String>()
        .replace("“", "")
        .replace(";”", "");

    Ok(json!({
        "title": title,
        "text": text
    }))
}

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("Error on get verse: `{0}`")]
    ReqwestError(reqwest::Error),
}

impl From<reqwest::Error> for Error {
    fn from(error: reqwest::Error) -> Self {
        Error::ReqwestError(error)
    }
}

impl serde::Serialize for Error {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}
