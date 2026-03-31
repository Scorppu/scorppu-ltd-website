# Local D1 Database Setup

This project uses Cloudflare D1 (SQLite-compatible) as its database. When running
`npm run dev`, the app reads from a **local SQLite file** managed by Wrangler —
not from the remote Cloudflare database.

You need to create and seed this local database once after cloning the repo.

---

## Prerequisites

Install Wrangler globally:

```bash
npm install -g wrangler
```

---

## First-time setup

Run the following two commands from the project root:

```bash
wrangler d1 execute scorppu-prod --local --file=migrations/0001_create_tables.sql
wrangler d1 execute scorppu-prod --local --file=migrations/0002_seed_data.sql
```

This creates the local SQLite database at `.wrangler/state/v3/d1/` and populates
it with the current team member data.

The database file **persists between dev server restarts** — you only need to do
this once unless you delete `.wrangler/`.

---

## Verify the data

```bash
wrangler d1 execute scorppu-prod --local --command="SELECT slug, name, role FROM members"
```

Expected output:

```
┌────────────┬─────────────┬──────────────────────┐
│ slug       │ name        │ role                 │
├────────────┼─────────────┼──────────────────────┤
│ scorppu    │ Eugene Chan │ Founder & CEO        │
│ prince     │ Brian Wong  │ Software Engineer    │
│ edgeman475 │ Dawn Chan   │ Software Engineer    │
│ korbi      │ Eddie Wong  │ Civil Engineer       │
└────────────┴─────────────┴──────────────────────┘
```

---

## Running new migrations

When a new migration file is added to `migrations/`, apply it locally:

```bash
wrangler d1 execute scorppu-prod --local --file=migrations/<filename>.sql
```

Migration files are numbered sequentially (e.g. `0003_add_column.sql`).
Always apply them in order.

---

## Resetting the local database

If you need a clean slate:

```bash
rm -rf .wrangler/state/v3/d1
wrangler d1 execute scorppu-prod --local --file=migrations/0001_create_tables.sql
wrangler d1 execute scorppu-prod --local --file=migrations/0002_seed_data.sql
```

---

## Remote databases (maintainers only)

The remote preview and production databases are managed by the repo owner.
Apply migrations to remote environments with:

```bash
# Preview
wrangler d1 execute scorppu-preview --env preview --remote --file=migrations/<filename>.sql

# Production
wrangler d1 execute scorppu-prod --remote --file=migrations/<filename>.sql
```

You must be authenticated to the Cloudflare account with access to these databases.
