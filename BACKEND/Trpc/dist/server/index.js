"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoInputType = zod_1.z.object({
    title: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().optional(),
});
const appRouter = (0, trpc_1.router)({
    // ...
    createTodo: trpc_1.publicProcedure.input(todoInputType).mutation(async ({ input }) => {
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
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
});
server.listen(3000, () => {
    console.log("🚀 tRPC server running on http://localhost:3000/trpc");
});
//# sourceMappingURL=index.js.map