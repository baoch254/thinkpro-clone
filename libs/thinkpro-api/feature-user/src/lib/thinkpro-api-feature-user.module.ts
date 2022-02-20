import { Module } from '@nestjs/common';
import { CreateUserController, GetUserController } from './controllers';
import { GetUserService } from './services';

@Module({
  controllers: [GetUserController, CreateUserController],
  providers: [GetUserService],
  exports: [],
})
export class ThinkproApiFeatureUserModule {}
