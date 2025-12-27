/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
// ! this is root module of nest application here use all sub modules
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // making config module global so that no need to import in other modules
    }),
    HelloModule,
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
