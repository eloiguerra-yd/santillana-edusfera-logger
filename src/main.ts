import { NestFactory } from '@nestjs/core';
import { LoggerModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggerModule);
  await app.listen(3000);
}
bootstrap();
