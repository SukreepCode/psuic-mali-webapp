import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';

import * as path from 'path';
import * as exphbs from 'express-handlebars';

import * as livereloadMiddleware from 'connect-livereload';
import * as livereload from 'livereload';

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

function setupLiveReload(app: any, liveReloadPort: number = 35729) {
  // Create a livereload server
  const hotServer = livereload.createServer({
    port: liveReloadPort,
    // Reload on changes to these file extensions.
    exts: ['hbs'],
    // Print debug info
    debug: false,
  });

  console.log(path.join(__dirname, '../public/views'));

  // Specify the folder to watch for file-changes.
  hotServer.watch(path.join(__dirname, '../public/views'));
  app.use(
    livereloadMiddleware({
      port: liveReloadPort,
    }),
  );
}


function setupView(app: any, liveReloadPort?: number){
  const viewsPath = path.join(__dirname, '../public/views');
  app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
      helpers: {
        liveReloadPort,
      },
    }),
  );
  app.set('views', viewsPath);
  app.set('view engine', '.hbs');
}
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /**
   * Setup view for Express and live reload
   */
  let liveReloadPort = 35729;

  setupView(app, liveReloadPort);
  setupLiveReload(app, liveReloadPort);

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

  /**
   * Livereload
   */
}
bootstrap();
