import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../base.dto';

export class UserDto extends BaseDto {
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
