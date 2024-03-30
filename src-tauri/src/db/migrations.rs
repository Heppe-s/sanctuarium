use tauri_plugin_sql::{Migration, MigrationKind};

pub let migrations = vec![
  Migration {
    version: 1,
    description: "create_initial_tables",
    sql: "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);",
    kind: MigrationKind::Up,
  }
];

// categories
// [id,      name, description]
// [int8,    text,        text]

// annotations_categories
// [annotation_id, categorie_id]
// [           FK,           FK]

// annotations
// [  id,  title, date, text,    file, last_modify]
// [int8,   text, date, text, varchar,   datetime ]