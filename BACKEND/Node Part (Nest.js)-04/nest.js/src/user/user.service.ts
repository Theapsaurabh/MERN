/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  constructor(private readonly helloService: HelloService) {}

  getAllUsers() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ];
  }

  getUserById(id: number) {
    const user = this.getAllUsers().find((u) => u.id === id);
    return user ?? { message: 'User not found' };
  }

  getWelcomeMessageForUser(userId: number): string {
    const user = this.getUserById(userId);

    if ('message' in user) {
      return 'User not found';
    }

    return this.helloService.getHelloWithName(user.name);
  }
  
}
