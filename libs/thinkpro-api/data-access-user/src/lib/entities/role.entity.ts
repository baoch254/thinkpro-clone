import { BaseEntity } from '@thinkpro/thinkpro-api/data-access-shared';
import { Column, Entity } from 'typeorm';

@Entity('roles')
export class Role extends BaseEntity {
  @Column()
  name!: string;
}
