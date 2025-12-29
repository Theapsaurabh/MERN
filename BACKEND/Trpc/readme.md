# 📘 tRPC Beginner Guide (for Express Developers)

This guide explains tRPC concepts by mapping them to familiar Express patterns. After reading, you'll understand:

- What tRPC is and why it exists
- How your server & client work together
- What router, procedure, ctx, input, and createContext mean
- How tRPC replaces Express routes + controllers

## 🔷 What is tRPC?

tRPC is a **typesafe RPC framework**.

**Simple explanation:** tRPC lets you call backend functions directly from the frontend, without writing REST APIs or manually syncing types.

**Instead of:**
```javascript
app.get('/api/todos')
app.post('/api/signup')
req.body
res.json()
```
You get:

- Typed functions

- End-to-end TypeScript safety

- No API contract mismatches

# 🔁 Express vs tRPC (Mental Mapping)
```
Express	tRPC
app.post("/signup")	signUp: publicProcedure.mutation()
Controller function	Procedure
req.body	input
req.user / middleware	ctx
Route file	Router
API response	Function return value
Think of tRPC as: Typed Express + Controllers + Routes combined into one system.
```
# 📂 Your Project Structure
text
```
project/
├── server/
│   ├── index.ts        ← server + routes
│   └── trpc.ts         ← tRPC initialization
│
├── client/
│   └── index.ts        ← frontend / client
```
# 🟦 server/trpc.ts (tRPC Core Setup)
```
typescript
import { initTRPC } from '@trpc/server';
This imports the core tRPC engine.
```

# 🔹 Context (MOST IMPORTANT CONCEPT)
```
typescript
const t = initTRPC.context<{
  username: string;
}>().create();
```
# What is Context?
-  **Context** = **data created per request and shared with every procedure**  .
```
Express equivalent: req.user, req.headers, req.db

In your app, context contains:

typescript
{
  username: string
}
```
**This means**:

- Every request knows who the user is

- Auth logic runs once per request

# 🔹 Export Helpers
```
typescript
export const router = t.router;
export const publicProcedure = t.procedure;
```
**Express equivalent**:

- router → express.Router()

- procedure → controller function

**These helpers ensure every route is typed and context-aware**.

**🟦 server/index.ts (Your Backend Logic)
This file combines:**

- **index.ts (server setup)**

- **routes/*.ts (routes)**

- **controllers/*.ts (controllers)**


# 1️⃣ Input Validation (Zod)
typescript
```
const todoInputType = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
});
```
# Express equivalent: req.body.title, req.body.description

**But here**:

- Validation is automatic

- Types are inferred

- Invalid input never reaches logic

# 2️⃣ Router (like Express Router)
typescript
```
const appRouter = router({
  signUp: ...,
  signIn: ...,
  createTodo: ...
});
```
# Express equivalent:

javascript
``
router.post("/signup", ...)
router.post("/signin", ...)
router.post("/todo", ...)
``
# 3️⃣ Procedure = Route + Controller

**Example: signUp**

typescript
```
signUp: publicProcedure
  .input(
    z.object({
      username: z.string().min(3).max(20),
      password: z.string().min(6),
    })
  )
  .mutation(async ({ input, ctx }) => {
    // Logic here
  });
  ```
**Part	Meaning**
- **publicProcedure	No auth required**
- *.input()	Request body validation*
- *.mutation()	POST / write operation*
input	Client-sent data
ctx	Server-trusted data
🔐 Context Usage
typescript
const usernameFromContext = ctx.username;
Express equivalent: req.user.username

⚠️ Important rule:

input = client data

ctx = server data
They never mix (security)

4️⃣ createTodo (Business Logic)
typescript
createTodo: publicProcedure
  .input(todoInputType)
  .mutation(async ({ input, ctx }) => {
    return {
      id,
      title,
      description,
      createdBy: ctx.username,
    };
  });
Here:

input → todo data

ctx.username → authenticated user

Return value is automatically sent to client (no res.json() needed)

5️⃣ createContext (Auth Entry Point)
typescript
createContext: (input) => {
  const authHeader = input.req.headers["authorization"];
  // Extract username from token
  return {
    username: extractedUsername,
  };
};
Express equivalent: app.use(authMiddleware)

This function:

Runs once per request

Extracts auth info

Returns shared context

Now every procedure gets ctx.username.

6️⃣ HTTP Server
typescript
const server = createHTTPServer({
  router: appRouter,
  createContext,
});
This replaces:

javascript
app.use("/api", router)
app.listen(3000)
🟦 client/index.ts (Frontend / API Consumer)
This replaces:

Axios

Fetch

Swagger

API docs

1️⃣ Typed Client
typescript
const trpc = createTRPCClient<AppRouter>({ ... });
Because AppRouter is shared:

Frontend knows all routes

Frontend knows exact inputs

Frontend knows exact outputs

No mismatch possible

2️⃣ Auth Headers
typescript
headers() {
  return {
    authorization: 'Bearer exampletoken123'
  };
}
Same as: fetch(url, { headers })

3️⃣ Calling Backend Functions
typescript
await trpc.createTodo.mutate({
  title: "Go to Gym",
});
What actually happens:
Frontend → HTTP → tRPC → procedure → response

But to you, it feels like: await createTodo()

🔄 Full Request Flow
text
Client
  ↓
HTTP Request
  ↓
createContext()  // Auth runs here
  ↓
ctx created      // Shared with all procedures
  ↓
procedure(input, ctx)  // Business logic
  ↓
return value     // Auto-serialized
  ↓
Typed response to client
🧠 Key Rules to Remember
No controllers

No routes

No req / res

input is client-controlled

ctx is server-controlled

Types flow end-to-end

🎯 Final Express → tRPC Translation
Express Concept	tRPC Equivalent
Middleware	createContext
Controller	Procedure
Route	Router key
req.body	input
req.user	ctx
res.json()	return value
📖 Summary
tRPC replaces REST/Express patterns with type-safe function calls:

Router = Object containing all endpoints

Procedure = Endpoint logic (replaces route + controller)

Context = Request-scoped data (replaces middleware)

Input = Validated request body (replaces req.body)

Client = Typesafe API caller (replaces axios/fetch)

The result: Zero API mismatches, full TypeScript safety, and a simpler mental model.