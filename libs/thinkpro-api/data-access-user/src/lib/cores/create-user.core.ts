import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger } from '@nestjs/common';
import { User } from '@thinkpro/thinkpro-api-shared-data-access-entities';
import { UserModel } from '@thinkpro/thinkpro-api/shared-data-access-models';
import { QueryFailedError } from 'typeorm';
import { UserRepository } from '../repositories';

@Injectable()
export class CreateUserCore {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private userRepository: UserRepository
  ) {}

  async createUser(model: UserModel): Promise<User> {
    try {
      console.log(model);
      const userEntity = this.mapper.map(model, User, UserModel);
      console.log(userEntity);
      const result = await this.userRepository.save(userEntity);
      return result;
    } catch (ex) {
      if (ex instanceof QueryFailedError) {
        Logger.error(ex, ex.stack);
      }
      throw ex;
    }
  }
}
