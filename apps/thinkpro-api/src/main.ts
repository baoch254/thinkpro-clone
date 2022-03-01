/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  HttpStatus,
  INestApplication,
  Logger,
  VersioningType,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  AppConfig,
  appConfiguration,
} from '@thinkpro/thinkpro-api/utils-config';

import * as compression from 'compression';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';

function configureSwagger(
  appConfig: AppConfig,
  app: INestApplication,
  globalPrefix: string
) {
  const swaggerDocOptions = new DocumentBuilder()
    .setTitle('Think Pro API')
    .setDescription('API documentation for Think Pro')
    .setVersion('1.0.0')
    .addServer(`${appConfig.domain}`, 'Development API')
    .addBearerAuth()
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions, {
    operationIdFactory: (_, methodKey) => methodKey,
  });
  SwaggerModule.setup('api/docs', app, swaggerDoc, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
  Logger.log(
    `Swagger Docs enabled: ${appConfig.domain}/${globalPrefix}/docs`,
    'NestApplication'
  );
}

function configureNoContentHandlers(app: INestApplication) {
  app.use('/robots.txt', (_, res) => {
    res.send('User-Agent: *\n' + 'Disallow: /');
  });
  app.use('/favicon.ico', (_, res) => {
    res.sendStatus(HttpStatus.NO_CONTENT).end();
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfig>(appConfiguration.KEY);

  app.enableCors();

  app.use(compression());
  app.use(helmet());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  configureSwagger(appConfig, app, globalPrefix);
  configureNoContentHandlers(app);

  await app.listen(appConfig.port);
  Logger.log(`🚀 Listening on: ${appConfig.domain}/${globalPrefix}`);
}

bootstrap();
