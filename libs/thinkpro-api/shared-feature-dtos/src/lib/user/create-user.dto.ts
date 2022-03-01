import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @AutoMap()
  @IsNotEmpty()
  firstName!: string;

  @ApiProperty({ type: String })
  @AutoMap()
  lastName!: string;

  @ApiProperty({ type: String })
  @AutoMap()
  @IsEmail()
  email!: string;
}
