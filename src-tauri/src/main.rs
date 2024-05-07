// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

mod db;
use db::{generate_migrations, DB_URL};
mod get_verse;
use get_verse::get_verse;
use serde_json::{json, Value};

#[tauri::command]
fn get_config() -> Value {
    json!({
        "db_url": DB_URL
    })
}

fn main() {
    let migrations = generate_migrations();

    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::default()
                .add_migrations(DB_URL, migrations)
                .build(),
        )
        .invoke_handler(tauri::generate_handler![get_config, get_verse])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
