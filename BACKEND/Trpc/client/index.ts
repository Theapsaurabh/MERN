import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
          authorization: 'Bearer exampletoken123'  // Replace with actual token retrieval logic
        };
      }
    }),
    
  ],
});


async function main() {
  const response = await trpc.createTodo.mutate({
    title: "Go to Gym",
    description: "Leg day workout"
  });

  console.log(response);


    const signupResponse = await trpc.signUp.mutate({ 
        username: "newuser",
        password: "securepassword123"
    });      

    console.log(signupResponse);
}

main().catch(console.error);
