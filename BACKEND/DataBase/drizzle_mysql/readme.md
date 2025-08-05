# 🌿 Drizzle ORM + Neon Serverless + Node.js CRUD Setup

This project demonstrates how to use **Drizzle ORM** with **Neon serverless PostgreSQL** in a **Node.js** environment.  
It includes:

- ✅ Project setup
- 📦 Schema definition
- 🔌 Drizzle + Neon DB connection
- 🔄 CRUD operations
- 🚀 Running the project
- 📁 Folder structure
- 🧠 Best practices and tips

---

## 📁 Project Structure

project-root/
│
├── config/
│ └── db.js # Drizzle + Neon DB configuration
│
├── drizzle/
│ └── schema.js # Table schema definitions
│
├── .env # Environment variables (ignored in .gitignore)
├── drizzle.config.ts # Drizzle CLI configuration
├── index.js # Entry point with CRUD logic
├── package.json
└── README.md # This file

---

## 🔧 1. Setup Instructions

### 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [Neon](https://neon.tech) PostgreSQL database
- `.env` file containing your DB URL

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

