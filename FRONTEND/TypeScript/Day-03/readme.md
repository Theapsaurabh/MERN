# Complete Guide to `tsconfig.json` in TypeScript

`tsconfig.json` is a configuration file used by TypeScript to specify **compiler options** and **project settings**. It tells the TypeScript compiler (`tsc`) how to compile your TypeScript code into JavaScript. Think of it as a **control panel for the compiler**. Without it, you would need to manually pass compiler options every time you run `tsc`.

---

## Why Use `tsconfig.json`?

- **Specify Compiler Behavior:**  
  - Enforce type-checking rules.  
  - Specify module resolution and target JavaScript version.  
  - Enable JSX support or modern JS features.

- **Organize Large Projects:**  
  - Define which files are included or excluded.  
  - Helps TypeScript understand your project structure.

- **Enable Modern Features Safely:**  
  - Use ES6/ESNext features.  
  - Support JSX in React projects.

---

## Basic Structure of `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}


