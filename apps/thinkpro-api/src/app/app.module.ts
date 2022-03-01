import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ThinkproApiFeatureConfigModule } from '@thinkpro/thinkpro-api/feature-config';
import { ThinkproApiFeatureUserModule } from '@thinkpro/thinkpro-api/feature-user';
import {
  TypeOrmConfig,
  typeOrmConfiguration,
} from '@thinkpro/thinkpro-api/utils-config';
import * as entities from '@thinkpro/thinkpro-api-shared-data-access-entities';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import {
  BadRequestExceptionFilter,
  HttpExceptionFilter,
} from '@thinkpro/thinkpro-api/shared-utils-exception-filters';

@Module({
  imports: [
    ThinkproApiFeatureConfigModule,
    ThinkproApiFeatureUserModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (typeOrmConfig: TypeOrmConfig) =>
        ({
          type: typeOrmConfig.type,
          host: typeOrmConfig.host,
          port: typeOrmConfig.port,
          username: typeOrmConfig.username,
          password: typeOrmConfig.password,
          database: typeOrmConfig.database,
          entities: Object.values(entities),
          synchronize: true,
        } as TypeOrmModuleOptions),
      inject: [typeOrmConfiguration.KEY],
    }),
    AutomapperModule.forRoot({
      singular: true,
      options: [
        {
          name: 'classes',
          pluginInitializer: classes,
        },
      ],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
