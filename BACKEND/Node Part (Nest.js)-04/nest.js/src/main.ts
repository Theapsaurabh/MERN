import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//! this is root point of nest application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // here we can use global middlewares, pipes , filters etc

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
