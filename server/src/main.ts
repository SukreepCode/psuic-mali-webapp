import { NestFactory } from '@nestjs/core';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, HttpAdapterHost } from '@nestjs/common';
import { AppModule } from './app.module';
import * as express from 'express';

import { AllExceptionsFilter } from './auth/all-exceptions.filter';

import * as path from 'path';

function setupSwagger(app: any) {
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

function getExpressInstance(app: any) {
  return app.getHttpAdapter().getInstance();
}

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /**
   * Global pip for request body validation
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Global Exception Filter for catching everything
   * https://docs.nestjs.com/exception-filters
   */

  // app.useGlobalFilters(new AllExceptionsFilter());
  
  /**
   * Setup swagger api
   */
  setupSwagger(app);

  /**
   * Security Issue: https://docs.nestjs.com/techniques/security
   */
  app.enableCors();


  await app.listen(4000);

  /**
   * Register Hot-Module Replacement
   */

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      app.close();
    });
  }
}
bootstrap();
