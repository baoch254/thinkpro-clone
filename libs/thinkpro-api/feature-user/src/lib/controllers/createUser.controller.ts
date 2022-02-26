import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@thinkpro/thinkpro-api/feature-shared';
import { ApiErrors } from '@thinkpro/thinkpro-api/utils-shared';
import { CreateUserService } from '../services';

@Controller('users')
@ApiTags('users')
@ApiErrors()
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('')
  @ApiOkResponse({ type: Boolean })
  async createUser(@Body() dto: CreateUserDto) {
    console.log(dto);
    return await this.createUserService.createUser(dto);
  }
}
