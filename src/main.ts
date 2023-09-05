import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { configurationService } from './config/config.service';
import { ApiKeyGuard } from './common/guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new ApiKeyGuard(configurationService));
  const config = new DocumentBuilder()
    .setTitle('Reserve tables backend')
    .setDescription('Rotas e Schemas')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'X_API_KEY', in: 'header' }, 'ApiKey')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
