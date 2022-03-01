import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class BaseModel {
  @ApiProperty()
  @AutoMap()
  id!: number;
  @ApiProperty({ type: String, format: 'date-time' })
  @AutoMap()
  createdAt!: Date;
  @ApiProperty({ type: String, format: 'date-time' })
  @AutoMap()
  updatedAt!: Date;
}
