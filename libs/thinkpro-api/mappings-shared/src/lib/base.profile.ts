import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { BaseModel } from '@thinkpro/thinkpro-api/data-access-shared';
import { BaseDto } from '@thinkpro/thinkpro-api/feature-shared';

@Injectable()
export class BaseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      mapper.createMap(BaseModel, BaseDto);
      mapper.createMap(BaseDto, BaseModel);
    };
  }
}
