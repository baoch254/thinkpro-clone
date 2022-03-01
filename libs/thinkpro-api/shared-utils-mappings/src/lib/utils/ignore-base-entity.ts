import { CreateMapFluentFunction, ignore } from '@automapper/core';

export const ignoreEntityState = (mapper: CreateMapFluentFunction) => {
  mapper
    .forMember((destination) => destination.updatedAt, ignore())
    .forMember((destination) => destination.createdAt, ignore());
};
