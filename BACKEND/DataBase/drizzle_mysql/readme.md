# 🌿✨ Drizzle ORM + 🟢 Neon Serverless + 🟨 Node.js CRUD Setup

This project shows how to use **Drizzle ORM** with **Neon (serverless PostgreSQL)** in a clean 🧼, modular 🧱, and full-stack-ready 🖥️ **Node.js** environment.

---

## 📚 Table of Contents

- 📁 [Project Structure](#-project-structure)
- 🔧 [Setup Instructions](#-1-setup-instructions)
- 🧬 [Schema Definition](#-2-define-schema)
- 🛠️ [Drizzle CLI Configuration](#️-3-drizzle-cli-configuration)
- 🔌 [Database Config](#-4-configure-drizzle--neon-client)
- 🔄 [CRUD Operations](#-5-example-crud-operations)
- 🚀 [Running the Project](#-6-run-the-project)
- 🧠 [Tips & Notes](#-tips--notes)
- 🧪 [Useful Commands](#-useful-commands)
- 🧑‍💻 [Author & Links](#-author)
- 📌 [Future Enhancements](#-todo-future-enhancements)

---

## 📁 Project Structure

```
project-root/
│
├── config/
│   └── db.js               🧠 DB connection config (Drizzle + Neon)
│
├── drizzle/
│   └── schema.js           🧬 Table definitions
│
├── .env                    🔐 Environment variables (ignored)
├── drizzle.config.ts       🛠️ Drizzle CLI config
├── index.js                🧪 Entry point (CRUD logic)
├── package.json            📦 NPM metadata
└── README.md               📖 This file
```

---

## 🔧 1. Setup Instructions

### 🛠️ Prerequisites

- 🔵 [Node.js](https://nodejs.org/) (v18+ recommended)
- 🟢 [Neon PostgreSQL](https://neon.tech) (serverless DB)
- `.env` file with DB URL

---

### ⚙️ Installation

```bash
npm install drizzle-orm @neondatabase/serverless dotenv
npm install -D drizzle-kit
```

---

### 🔐 Environment Setup

Create a `.env` file in the root:

```env
DATABASE_URL="your_neon_database_url_here"
```

> ⚠️ Replace `"your_neon_database_url_here"` with your actual Neon database URL

---

## 🧬 2. Define Schema

```js
// drizzle/schema.js
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
```

> 🎯 This creates a `users` table with `id`, `name`, `age`, and unique `email`.

---

## 🛠️ 3. Drizzle CLI Configuration

```ts
// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
```

> 🧪 Run Drizzle CLI to sync schema (optional):

```bash
npx drizzle-kit push
```

---

## 🔌 4. Configure Drizzle + Neon Client

```js
// config/db.js
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../drizzle/schema.js';

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
```

> 🧠 Drizzle ORM + Neon serverless client integration is complete here.

---

## 🔄 5. Example CRUD Operations

```js
// index.js
import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const { name } = usersTable;

const main = async () => {
  // 📥 READ
  const allUsers = await db.select().from(usersTable);
  console.log("📦 All Users:", allUsers);

  // ✏️ UPDATE
  await db.update(usersTable)
    .set({ age: 25 })
    .where(eq(name, "Saurabh"));

  // ❌ DELETE
  await db.delete(usersTable)
    .where(eq(name, "Saurabh"));

  console.log("✅ CRUD completed");
};

main().catch(console.error);
```

---

## 🚀 6. Run the Project

```bash
node index.js
```

> 💡 Make sure `"type": "module"` is set in `package.json` to use `import`.

---

## 🧠 Tips & Notes

- 🌱 Use `drizzle-orm/neon-http` for serverless DBs (like Neon).
- 🧬 Migrations are optional unless you're syncing schema with SQL.
- 🔁 Use `.env` to securely store DB URLs & credentials.

---

## 🧪 Useful Commands

```bash
# 🌿 Generate SQL schema from your JS schema
npx drizzle-kit push

# 🧪 Run your script (entry point)
node index.js
```

---

## 📌 TODO (Future Enhancements)

- [ ] ➕ Add `insert()` example
- [ ] 🗃️ Add Drizzle migrations with CLI
- [ ] ⚡ Express.js / Next.js API integration
- [ ] 🧾 Add TypeScript types
- [ ] ✅ Add testing for CRUD ops

---

## 🧑‍💻 Author

Made with 💚 by **Saurabh Pandey**  
🔗 [@Theapsaurabh on GitHub](https://github.com/Theapsaurabh)

---

## 📘 Learn More

- 🌿 [Drizzle ORM Docs](https://orm.drizzle.team/)
- 🟢 [Neon Serverless DB](https://neon.tech/)
- 🛠️ [Drizzle Kit CLI Guide](https://orm.drizzle.team/docs/overview/cli)
