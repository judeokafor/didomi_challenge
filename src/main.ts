import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config: ConfigService = app.get(ConfigService);
  const PORT: number = config.get<number>('PORT');

  await app.listen(PORT, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}
bootstrap();
