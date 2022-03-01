import { Module } from '@nestjs/common';
import { UserProfile } from '@thinkpro/thinkpro-api-shared-utils-mappings';
import { ThinkproApiDataAccessUserModule } from '@thinkpro/thinkpro-api/data-access-user';
import { CreateUserController, GetUserController } from './controllers';
import { CreateUserService, GetUserService } from './services';

@Module({
  imports: [ThinkproApiDataAccessUserModule],
  controllers: [GetUserController, CreateUserController],
  providers: [GetUserService, CreateUserService, UserProfile],
  exports: [],
})
export class ThinkproApiFeatureUserModule {}
