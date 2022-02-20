import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ThinkproApiFeatureConfigModule } from '@thinkpro/thinkpro-api/feature-config';
import { ThinkproApiFeatureUserModule } from '@thinkpro/thinkpro-api/feature-user';

@Module({
  imports: [
    ThinkproApiFeatureConfigModule,
    ThinkproApiFeatureUserModule,
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
