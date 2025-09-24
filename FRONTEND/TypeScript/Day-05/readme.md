# TypeScript: `any` vs `unknown`

This note explains the difference between `any` and `unknown` in TypeScript, with examples and key points.

---

## 1. `any`

- **Meaning:** “I don’t care what this type is.”
- **Type safety:** None. You can do anything with an `any` variable—call it as a function, access properties, assign it to anything—TypeScript won’t complain.
- **Use case:** Temporary escape hatch, e.g., when migrating JavaScript code or unsure of the type.'
## 2. `unknown`
Meaning: “I don’t know what this type is yet, but I want safety.”

Type safety: High. You cannot use it directly without type checking or type assertion.

Use case: Safer alternative to any when you really don’t know the type upfront.

ts
## Key Differences at a Glance

| Feature          | `any`                          | `unknown`                          |
|-----------------|--------------------------------|-----------------------------------|
| Assignable to    | Anything                        | Anything                           |
| Usable as        | Anything without checks         | Must be type-checked or asserted  |
| Type safety      | None                            | Safe                               |
| Recommended use  | Quick-and-dirty / JS migration | Unknown input / safer alternative |

---

## Rule of Thumb

Prefer `unknown` over `any` whenever possible. It keeps TypeScript safe while still allowing flexibility.

yaml

```ts
let a: any;

a = 5;          // okay
a = "hello";    // okay
a.foo();        // okay, no error
Pros: ✅ Flexible, quick
Cons: ❌ Removes all type safety; defeats the purpose of TypeScript



let u: unknown;

u = 5;         // okay
u = "hello";   // okay

// ❌ Error: Object is of type 'unknown'
u.toUpperCase(); 

// ✅ Must narrow the type first
if (typeof u === "string") {
  console.log(u.toUpperCase()); // Now it's safe
}
Pros: ✅ Maintains type safety, forces you to check types
Cons: ❌ Slightly more verbose than any


Copy code

---

If you want, I can also **add a small section with a “real-world example” showing how `any` can silently break your code but `unknown` catches the error**—it’s really useful for revision.  

Do you want me to add that?