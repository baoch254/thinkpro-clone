import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BaseProfile } from '@thinkpro/thinkpro-api-shared-utils-mappings';
import {
  appConfiguration,
  typeOrmConfiguration,
} from '@thinkpro/thinkpro-api/utils-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration, typeOrmConfiguration],
    }),
  ],
  providers: [BaseProfile],
  exports: [],
})
export class ThinkproApiFeatureConfigModule {}
