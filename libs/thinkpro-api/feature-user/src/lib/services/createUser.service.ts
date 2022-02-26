import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserModel } from '@thinkpro/thinkpro-api/data-access-shared';
import { CreateUserDto } from '@thinkpro/thinkpro-api/feature-shared';

@Injectable()
export class CreateUserService {
  constructor(@InjectMapper() private mapper: Mapper) {}

  async createUser(dto: CreateUserDto): Promise<boolean> {
    const user = this.mapper.map(dto, UserModel, CreateUserDto);
    console.log(user);

    return true;
  }
}
