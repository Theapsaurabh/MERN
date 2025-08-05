✅ Project setup

📦 Schema definitions

🔌 Database connection using Drizzle ORM & Neon

🔄 CRUD operations

🚀 Running the project

📁 Folder structure

🧠 Best practices and notes

✅ README.md — Drizzle ORM + Neon + Node.js Project
md
Copy code

# 🌿 Drizzle ORM + Neon Serverless + Node.js CRUD Setup

This project demonstrates how to use **Drizzle ORM** with **Neon Serverless PostgreSQL** in a **Node.js environment**. It's a clean and minimal full-stack-ready setup that includes schema definition, DB config, and CRUD operations.

---

## 📁 Project Structure

project-root/
│
├── config/
│ └── db.js # DB config using drizzle + neon
│
├── drizzle/
│ └── schema.js # Table schemas defined using Drizzle ORM
│
├── .env # Environment variables
├── drizzle.config.ts # Drizzle CLI config
├── index.js # Entry file with example CRUD operations
├── package.json
└── README.md # This file

less
Copy code

---

## 🔧 1. Setup Instructions

### 🛠️ Prerequisites

- Node.js (v18+ recommended)
- A Neon PostgreSQL database (https://neon.tech)
- A `.env` file with your Neon DB URL

### ⚙️ Step-by-Step Setup

#### 1. Install Dependencies

```bash
npm install drizzle-orm @neondatabase/serverless dotenv
npm install -D drizzle-kit
2. Configure Environment
Create a .env file in the root:

env
Copy code
DATABASE_URL="your_neon_database_url_here"
Replace your_neon_database_url_here with your actual Neon DB URL.

🧬 2. Define Schema
Create the schema in drizzle/schema.js:

js
Copy code
// drizzle/schema.js
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
🛠️ 3. Drizzle CLI Config
Create drizzle.config.ts (or .js) at the root:

ts
Copy code
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
To generate SQL migration (optional for CLI use):

bash
Copy code
npx drizzle-kit push
🔌 4. Configure Drizzle + Neon
Setup DB connection in config/db.js:

js
Copy code
// config/db.js
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../drizzle/schema.js';

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
🔄 5. Example: CRUD Operations
Use the database in index.js:

js
Copy code
// index.js
import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const { name } = usersTable;

const main = async () => {
  // READ
  const allUsers = await db.select().from(usersTable);
  console.log("📦 All Users:", allUsers);

  // UPDATE
  await db.update(usersTable)
    .set({ age: 25 })
    .where(eq(name, "Saurabh"));

  // DELETE
  await db.delete(usersTable)
    .where(eq(name, "Saurabh"));

  console.log("✅ CRUD completed");
};

main().catch(console.error);
🚀 6. Run the Project
bash
Copy code
node index.js
If you use "type": "module" in package.json, you can use ES modules as shown.

🧠 Tips & Notes
drizzle-orm/neon-http is designed for serverless use cases, ideal with Neon.

You don't need to manually run migrations unless you use Drizzle CLI for schema sync.

Always keep schema definition in sync between Drizzle and your actual DB.

🔍 Useful Commands
bash
Copy code
# Drizzle push (generate SQL schema from your Drizzle schema)
npx drizzle-kit push

# Run main logic
node index.js
🧠 Learn More
Drizzle ORM Docs

Neon PostgreSQL

Drizzle Kit CLI

📌 TODO (Future Enhancements)
 Add insert() example

 Add migrations using Drizzle CLI

 Integrate with Express.js / Next.js

 Add TypeScript support

🧑‍💻 Author
Made with 💚 by Saurabh Pandey








