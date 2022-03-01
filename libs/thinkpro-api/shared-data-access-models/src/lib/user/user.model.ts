import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from '../base.model';

export class UserModel extends BaseModel {
  @ApiProperty({ type: String })
  @AutoMap()
  firstName!: string;

  @ApiProperty({ type: String })
  @AutoMap()
  lastName!: string;

  @ApiProperty({ type: String })
  @AutoMap()
  email!: string;
}
