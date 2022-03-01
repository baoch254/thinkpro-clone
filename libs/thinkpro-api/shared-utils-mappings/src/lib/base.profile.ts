import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { BaseDto } from '@thinkpro/thinkpro-api/shared-feature-dtos';
import { BaseModel } from '@thinkpro/thinkpro-api/shared-data-access-models';
import { BaseEntity } from '@thinkpro/thinkpro-api-shared-data-access-entities';

@Injectable()
export class BaseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      mapper.createMap(BaseModel, BaseDto);
      mapper.createMap(BaseDto, BaseModel);

      mapper.createMap(BaseModel, BaseEntity);
      mapper.createMap(BaseEntity, BaseModel);
    };
  }
}
