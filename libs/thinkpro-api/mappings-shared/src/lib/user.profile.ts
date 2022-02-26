import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import {
  BaseModel,
  UserModel,
} from '@thinkpro/thinkpro-api/data-access-shared';
import {
  BaseDto,
  CreateUserDto,
  UserDto,
} from '@thinkpro/thinkpro-api/feature-shared';
import { ignoreBaseModel } from './utils/ignoreBaseModel';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      const baseToDtoMapping = mapper.getMapping(BaseModel, BaseDto);

      mapper.createMap(UserModel, UserDto, { extends: [baseToDtoMapping] });
      const createMapper = mapper.createMap(CreateUserDto, UserModel);
      ignoreBaseModel(createMapper);
    };
  }
}
