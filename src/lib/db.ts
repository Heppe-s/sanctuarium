import { invoke } from "@tauri-apps/api/core";
import Database from "@tauri-apps/plugin-sql";

interface CategoryInfos {
  name: string;
  description?: string;
}

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

export async function createCategory(category: CategoryInfos) {
  if (!category?.name) throw new Error("No name has provided to category");
  const { name, description } = category;

  const query = "INSERT INTO categories (name, description) VALUES ($1, $2)";

  await db.execute(query, [name, description]);

  return true;
}

export function addCategory(annotationId: number, categoryId: number) {
  if (!annotationId || !Number.isInteger(annotationId) || annotationId <= 0) {
    throw new Error("annotationId must be a positive integer");
  }
  if (!categoryId || !Number.isInteger(categoryId) || categoryId <= 0) {
    throw new Error("categoryId must be a positive integer");
  }

  const query = `INSERT INTO annotations_categories (annotation_id, category_id) VALUES ($1, $2);`;
  return db.execute(query, [annotationId, categoryId]);
}
