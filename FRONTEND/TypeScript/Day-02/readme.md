🚀 TypeScript Setup Guide
📌 1. Install Node.js

TypeScript requires Node.js and npm.
Download and install from 👉 Node.js Official Website
.

Check versions:

node -v
npm -v

📌 2. Install TypeScript

You can install TypeScript globally or locally inside a project.

🔹 Global Installation
npm install -g typescript


Verify installation:

tsc -v

🔹 Local Installation (per project, recommended)
npm init -y               # initialize package.json
npm install --save-dev typescript


Check version:

npx tsc -v

📌 3. Create a TypeScript File

Create a file named index.ts:

// index.ts
function greet(name: string): string {
  return `Hello, ${name}! 👋`;
}

console.log(greet("World"));

📌 4. Compile TypeScript → JavaScript

Compile a single file:

tsc index.ts


This generates index.js.

📌 5. Run the JavaScript File

Run with Node.js:

node index.js


Output:

Hello, World! 👋

📌 6. Using tsconfig.json (Project Setup)

Instead of compiling each file manually, initialize a tsconfig.json:

npx tsc --init


Then simply run:

tsc


This compiles the entire project based on your configuration.

📌 7. Watch Mode (Auto-Compile)

Let TypeScript recompile automatically on file save:

tsc -w


✅ You are now ready to write and run TypeScript projects!