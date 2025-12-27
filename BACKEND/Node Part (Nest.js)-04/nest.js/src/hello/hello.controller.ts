/* eslint-disable prettier/prettier */
import { Controller,Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';


// express ->
// index.js-> routes, controllers, services
// route A= controler A -> service A

// nest.js ->
// module A -> controller A -> service A
// incoming request and returning response handled by controller
// get, post, put, delete

// localhost:3000/hello -> HelloController

@Controller('hello')
export class HelloController {
    //! dependency injection
  constructor(private readonly helloService: HelloService) {}
  // Add a GET route handler method
  @Get('first-route')
  getHello() {
    return this.helloService.getHello();
  }
// dynamic route
    @Get('user/:name')
    getHelloWithName(@Param(`name`) name: string): string { 
       
        return this.helloService.getHelloWithName(name);  
    }
// query params
@Get('query')
getHellowithQuery(@Query('name') name: string): string{
    return this.helloService.getHelloWithName(name || 'Guest');
}

// 
}
