import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";


const { name } = usersTable;

const main = async () => {
  
  const allUsers = await db.select().from(usersTable);
  console.log("📦 All Users:", allUsers);

  
  await db.update(usersTable)
    .set({ age: 25 })
   .where(eq(name, "Saurabh"))

  
  await db.delete(usersTable)
    .where(eq(name, "Saurabh"))

  console.log("✅ CRUD completed");
};

main().catch(console.error);
