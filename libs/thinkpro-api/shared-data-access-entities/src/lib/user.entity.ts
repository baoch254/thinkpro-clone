import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './abstract/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @AutoMap()
  @Column()
  firstName!: string;

  @AutoMap()
  @Column()
  lastName!: string;

  @AutoMap()
  @Column({ unique: true })
  email!: string;
}
