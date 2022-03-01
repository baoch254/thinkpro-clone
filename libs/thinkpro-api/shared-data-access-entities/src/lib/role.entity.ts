import { Column, Entity } from 'typeorm';
import { BaseEntity } from './abstract/base.entity';

@Entity('roles')
export class Role extends BaseEntity {
  @Column()
  name!: string;
}
