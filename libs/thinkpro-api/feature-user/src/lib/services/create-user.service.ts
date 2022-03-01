import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@thinkpro/thinkpro-api/shared-feature-dtos';
import { UserModel } from '@thinkpro/thinkpro-api/shared-data-access-models';
import { CreateUserCore } from '@thinkpro/thinkpro-api/data-access-user';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private createUserCore: CreateUserCore
  ) {}

  async createUser(dto: CreateUserDto): Promise<boolean> {
    const user = this.mapper.map(dto, UserModel, CreateUserDto);

    this.createUserCore.createUser(user);

    return true;
  }
}
