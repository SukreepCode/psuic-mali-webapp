import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';

import { join } from 'path';
import * as exphbs from 'express-handlebars';

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

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  /**
   * Setup view 
   */

  const viewsPath = join(__dirname, '../public/views');
  app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
  app.set('views', viewsPath);
  app.set('view engine', '.hbs');

  /**
   * Global pip for request body validation
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Setup swagger api
   */
  setupSwagger(app);

  await app.listen(4000);

  /**
   * Register Hot-Module Replacement
   */

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
