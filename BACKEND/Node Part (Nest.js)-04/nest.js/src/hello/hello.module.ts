import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

// root module of hello feature

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  imports: [], // imoprt other modules if any needed
  exports: [HelloService], // export services if needed in other modules
})
export class HelloModule {}
