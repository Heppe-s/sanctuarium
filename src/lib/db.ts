import Database from "@tauri-apps/plugin-sql"

let db: Database

async function init(url: string) {
  // verifica se a "url" é uma string
  // verifica se a "url" é começa com "sqlite:"
  
  db = new Database(url)
}