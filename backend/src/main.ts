import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Substitua pelo domínio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar para permitir cookies/sessões com origens diferentes
  });

  console.log(process.env.PORT);

  await app.listen(3000);
}
bootstrap();
