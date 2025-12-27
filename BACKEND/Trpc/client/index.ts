import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
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
