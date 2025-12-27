"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@trpc/client");
const trpc = (0, client_1.createTRPCClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: 'http://localhost:3000',
        }),
    ],
});
async function main() {
    const response = await trpc.createTodo.mutate({
        title: "Go to Gym",
        description: "Leg day workout"
    });
    console.log(response);
}
main().catch(console.error);
//# sourceMappingURL=index.js.map