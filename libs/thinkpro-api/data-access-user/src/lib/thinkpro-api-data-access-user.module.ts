import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserCore, GetUserCore, UpdateUserCore } from './cores';
import { UserRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [CreateUserCore, GetUserCore, UpdateUserCore],
  exports: [CreateUserCore, GetUserCore, UpdateUserCore],
})
export class ThinkproApiDataAccessUserModule {}
