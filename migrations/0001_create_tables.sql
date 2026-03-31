CREATE TABLE IF NOT EXISTS members (
  slug        TEXT PRIMARY KEY,
  handle      TEXT NOT NULL,
  name        TEXT NOT NULL,
  role        TEXT NOT NULL DEFAULT '',
  short_bio   TEXT NOT NULL DEFAULT '',
  bio         TEXT NOT NULL DEFAULT '',
  image_url   TEXT NOT NULL DEFAULT '',
  cv_url      TEXT,
  cv_filename TEXT
);

CREATE TABLE IF NOT EXISTS member_socials (
  slug      TEXT PRIMARY KEY REFERENCES members(slug) ON DELETE CASCADE,
  linkedin  TEXT,
  github    TEXT,
  youtube   TEXT,
  twitter   TEXT,
  instagram TEXT
);

CREATE TABLE IF NOT EXISTS member_work (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  slug        TEXT NOT NULL REFERENCES members(slug) ON DELETE CASCADE,
  start_date  TEXT NOT NULL,
  end_date    TEXT NOT NULL,
  role        TEXT NOT NULL,
  description TEXT NOT NULL  -- JSON array of strings
);

CREATE TABLE IF NOT EXISTS member_projects (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  slug        TEXT NOT NULL REFERENCES members(slug) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  github_url  TEXT
);

CREATE TABLE IF NOT EXISTS member_hobbies (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  slug             TEXT NOT NULL REFERENCES members(slug) ON DELETE CASCADE,
  name             TEXT NOT NULL,
  description      TEXT NOT NULL,
  youtube_video_id TEXT
);
