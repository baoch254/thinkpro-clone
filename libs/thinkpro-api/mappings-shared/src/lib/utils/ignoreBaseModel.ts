import { CreateMapFluentFunction, ignore } from '@automapper/core';

export const ignoreBaseModel = (mapper: CreateMapFluentFunction) => {
  mapper
    .forMember((destination) => destination.id, ignore())
    .forMember((destination) => destination.state, ignore())
    .forMember((destination) => destination.updatedAt, ignore())
    .forMember((destination) => destination.createdAt, ignore());
};
