import { Module } from '@nestjs/common';
import { UserProfile } from '@thinkpro/thinkpro-api/mappings-shared';
import { CreateUserController, GetUserController } from './controllers';
import { CreateUserService, GetUserService } from './services';

@Module({
  controllers: [GetUserController, CreateUserController],
  providers: [GetUserService, CreateUserService, UserProfile],
  exports: [],
})
export class ThinkproApiFeatureUserModule {}
