import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'First name of user' })
  @AutoMap()
  @IsNotEmpty()
  firstName!: string;

  @ApiProperty({ type: String, description: 'Last name of user' })
  @AutoMap()
  lastName!: string;

  @ApiProperty({ type: String, description: 'Email of user' })
  @AutoMap()
  @IsEmail()
  email!: string;
}
