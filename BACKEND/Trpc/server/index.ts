import { router, publicProcedure } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
});
type Context = {
  username: string;
};


const appRouter = router({
  // ...

  

  signUp: publicProcedure
    .input(
      z.object({
        username: z.string().min(3).max(20),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ input,ctx }) => {
      // Logic to sign up a user
      // context
      const username2= ctx.username;
      console.log(username2);

      
      const username = input.username;
      const password = input.password;
      // do data base stuff here
      // create token using jwt
      // return jwt token

      return {
        id: Date.now().toString(),
        username: input.username,
        password: input.password,
      };
    }),

    signIn: publicProcedure
      .input(
        z.object({
          username: z.string().min(3).max(20),
          password: z.string().min(6),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Logic to sign in a user
        const username = input.username;
        const password = input.password;
        // do data base stuff here
        // create token using jwt
        // return jwt token

        return {
          id: Date.now().toString(),
          username: input.username,
          password: input.password,
        };
      }),
  createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async ({ input, ctx }) => {
      // Logic to create a todo
      const username = ctx.username;
      console.log(`Creating todo for user: ${username}`);

      const title = input.title;
      const description = input.description || "";

      // Here you would typically interact with your database to save the todo

      return {
        id: Date.now().toString(),
        title,
        description,
        createdBy: username,
      };
    }),



});



// Export type router type signature,
// NOT the router itself.
const server = createHTTPServer({

  router: appRouter,
  createContext: (input) => {
    let authHeader= input.req.headers["authorization"];
    let username = "";
    console.log(authHeader)
    if(authHeader){
      // Extract username from authHeader
      // For example, if it's a Bearer token, parse it
      // This is a placeholder for actual JWT parsing logic
      username = "exampleUser"; // Replace with actual parsing logic
    }
    return {
      username: username,
    };
  },
});

server.listen(3000, () => {
  console.log("🚀 tRPC server running on http://localhost:3000/trpc");
});
export type AppRouter = typeof appRouter;
