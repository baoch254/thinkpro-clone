import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '@thinkpro/thinkpro-api/shared-feature-dtos';
import { ApiErrors } from '@thinkpro/thinkpro-api/shared-utils-decorators';
import { CreateUserService } from '../services';

@Controller('users')
@ApiTags('users')
@ApiErrors()
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('')
  @ApiOperation({ description: 'Create new user' })
  @ApiCreatedResponse({
    type: Boolean,
    description: 'User was created successful',
  })
  async createUser(@Body() dto: CreateUserDto) {
    return await this.createUserService.createUser(dto);
  }
}
