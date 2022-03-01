import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@thinkpro/thinkpro-api/shared-feature-dtos';
import { ApiErrors } from '@thinkpro/thinkpro-api/shared-utils-decorators';
import { CreateUserService } from '../services';

@Controller('users')
@ApiTags('users')
@ApiErrors()
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('')
  @ApiOkResponse({ type: Boolean })
  async createUser(@Body() dto: CreateUserDto) {
    return await this.createUserService.createUser(dto);
  }
}
