import { AutoMap } from '@automapper/classes';
import { EntityState } from '@thinkpro/thinkpro-api/shared-utils-enums';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', default: EntityState.ACTIVE })
  state!: EntityState;

  @AutoMap()
  @CreateDateColumn()
  createdAt!: Date;

  @AutoMap()
  @UpdateDateColumn()
  updatedAt!: Date;
}
