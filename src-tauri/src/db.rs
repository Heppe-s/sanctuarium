use tauri_plugin_sql::{Migration, MigrationKind};

pub static DB_URL: &str = "sqlite:data.db";

pub fn generate_migrations() -> Vec<Migration> {
    return vec![Migration {
        version: 1,
        description: "create_initial_tables",
        sql: "CREATE TABLE
                annotations (
                    id INTEGER PRIMARY KEY,
                    title TEXT NOT NULL,
                    text TEXT,
                    file TEXT,
                    last_modify INTEGER DEFAULT (STRFTIME('%s', 'NOW')),
                    create_at INTEGER DEFAULT (STRFTIME('%s', 'NOW'))
                );
                
            CREATE TABLE
                categories (
                    id INTEGER PRIMARY KEY,
                    name TEXT NOT NULL UNIQUE,
                    description TEXT
                );
            
            CREATE TABLE
                annotations_categories (
                    annotation_id INTEGER NOT NULL,
                    category_id INTEGER NOT NULL,
                    FOREIGN KEY (annotation_id) REFERENCES annotations (id),
                    FOREIGN KEY (category_id) REFERENCES categories (id),
                    UNIQUE (annotation_id, category_id)
                );
                
            CREATE TRIGGER update_last_modify AFTER UPDATE ON annotations
                BEGIN
                    UPDATE annotations SET last_modify = STRFTIME('%s', 'NOW') WHERE id = NEW.id;
                END;",
        kind: MigrationKind::Up,
    }];
}

// categories
// [id,      name, description]
// [int8,    text,        text]

// annotations_categories
// [annotation_id, category_id]
// [           FK,           FK]

// annotations
// [  id,  title, text,    file, last_modify, create_at]
// [int8,   text, text, varchar,   timestamp , timestamp]
