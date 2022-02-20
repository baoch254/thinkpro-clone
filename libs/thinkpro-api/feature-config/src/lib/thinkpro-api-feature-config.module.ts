import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BaseProfile } from '@thinkpro/thinkpro-api/mappings-shared';
import { appConfiguration } from '@thinkpro/thinkpro-api/utils-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration],
    }),
  ],
  providers: [BaseProfile],
  exports: [],
})
export class ThinkproApiFeatureConfigModule {}
