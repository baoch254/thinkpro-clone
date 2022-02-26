import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
