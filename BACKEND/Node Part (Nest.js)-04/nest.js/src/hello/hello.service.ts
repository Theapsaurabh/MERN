/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// it contains business logic of hello feature

@Injectable()
export class HelloService {
    // service 1-> get hello message
  getHello(): string {
    return 'Hello from Hello Service!';
  }

  // service 2-> getting message with dynamic
    getHelloWithName(name: string): string { 
    return `Hello, ${name} from Hello Service!`;  


}
}
