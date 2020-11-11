import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import * as path from 'path';
import * as exphbs from 'express-handlebars';

import * as session from 'express-session';
import flash = require('connect-flash');
import * as passport from 'passport';

import * as livereloadMiddleware from 'connect-livereload';
import * as livereload from 'livereload';

const sessionSecret = 'mysecret'; // Do not use in the production

function setupPassportSession(app: any) {
  app.use(
    session({
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
}

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

  // Specify the folder to watch for file-changes.
  hotServer.watch(path.join(__dirname, 'views'));
  app.use(
    livereloadMiddleware({
      port: liveReloadPort,
    }),
  );
}

function setupView(app: any, liveReloadPort?: number) {
  app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(__dirname, '../public/views/layouts/'),
      partialsDir: path.join(__dirname, '../public/views/partials/'),
      helpers: {
        liveReloadPort,
      },
    }),
  );
  app.set('views', path.join(__dirname, '../public/views'));
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

  /**
   * setupPassportSession
   */
  setupPassportSession(app);

  await app.listen(4000);

  /**
   * Register Hot-Module Replacement
   */

  if (module.hot) {
    liveReloadPort += 1;
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
