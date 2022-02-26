import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ThinkproApiFeatureConfigModule } from '@thinkpro/thinkpro-api/feature-config';
import { ThinkproApiFeatureUserModule } from '@thinkpro/thinkpro-api/feature-user';
import {
  TypeOrmConfig,
  typeOrmConfiguration,
} from '@thinkpro/thinkpro-api/utils-config';
import * as entities from '../database/entities-index';

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
          logging: 'all',
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
  providers: [],
})
export class AppModule {}
