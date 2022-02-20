import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class BaseDto {
  @ApiProperty({ type: Number })
  @AutoMap()
  id!: number;
  @ApiProperty({ type: Number })
  @AutoMap()
  state!: number;
  @ApiProperty({ type: String, format: 'date-time' })
  @AutoMap()
  createdAt!: Date;
  @ApiProperty({ type: String, format: 'date-time' })
  @AutoMap()
  updatedAt!: Date;
}
