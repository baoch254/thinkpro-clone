import { ignore, Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import {
  BaseDto,
  CreateUserDto,
  UserDto,
} from '@thinkpro/thinkpro-api/shared-feature-dtos';
import {
  BaseModel,
  UserModel,
} from '@thinkpro/thinkpro-api/shared-data-access-models';
import {
  BaseEntity,
  User,
} from '@thinkpro/thinkpro-api-shared-data-access-entities';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      const baseM2DMapping = mapper.getMapping(BaseModel, BaseDto);
      const baseM2EMapping = mapper.getMapping(BaseModel, BaseEntity);

      mapper.createMap(UserModel, UserDto, { extends: [baseM2DMapping] });

      mapper
        .createMap(CreateUserDto, UserModel)
        .forMember((destination) => destination.id, ignore())
        .forMember((destination) => destination.updatedAt, ignore())
        .forMember((destination) => destination.createdAt, ignore());

      mapper
        .createMap(UserModel, User, { extends: [baseM2EMapping] })
        .forMember((destination) => destination.updatedAt, ignore())
        .forMember((destination) => destination.createdAt, ignore());
    };
  }
}
