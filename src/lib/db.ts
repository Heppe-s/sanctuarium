import { invoke } from "@tauri-apps/api/core";
import Database from "@tauri-apps/plugin-sql";
let db: Database;

export async function init() {
  if (db) return;

  const config = await invoke<{ db_url: string }>("get_config");
  db = await Database.load(config.db_url);
}
