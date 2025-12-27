/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
      return this.userService.getUserById(id);
    }

  @Get(':id/welcome')
  getWelcomeMessageForUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getWelcomeMessageForUser(id);
  }
}
