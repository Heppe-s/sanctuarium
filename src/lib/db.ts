import { invoke } from "@tauri-apps/api/core";
import Database from "@tauri-apps/plugin-sql";
interface AnnotationInfos {
  title: string;
  text?: string;
  file?: string;
}
let db: Database;

export async function init() {
  if (db) return;

  const config = await invoke<{ db_url: string }>("get_config");
  db = await Database.load(config.db_url);
}

export async function createAnnotation(annotation: AnnotationInfos) {
  if (!annotation.title) throw new Error("No title has provided to annotation");
  const { title, file, text } = annotation;

  if (file && typeof file !== "string") {
    throw new Error("File must be a string");
  }

  if (text && typeof text !== "string") {
    throw new Error("Text must be a string");
  }

  const query =
    "INSERT INTO annotations (title, file, text) VALUES ($1, $2, $3)";

  await db.execute(query, [title, file, text]);

  return true;
}
