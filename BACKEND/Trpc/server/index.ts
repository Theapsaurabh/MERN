import { router,publicProcedure } from './trpc';
import {z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

 

const todoInputType= z.object({
    title: z.string().min(1).max(100),
    description: z.string().optional(),

})
const appRouter = router({
  // ...

  createTodo: publicProcedure.input(todoInputType).mutation(async ({ input }: { input: z.infer<typeof todoInputType> }) => {

    // Logic to create a todo item
    const title = input.title;

    return {
      id: Date.now().toString(),
      title: input.title,
      description: input.description || '',
    };
  }),

});


 
// Export type router type signature,
// NOT the router itself.
const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000,()=>{
    console.log("🚀 tRPC server running on http://localhost:3000/trpc");

});
export type AppRouter = typeof appRouter;
