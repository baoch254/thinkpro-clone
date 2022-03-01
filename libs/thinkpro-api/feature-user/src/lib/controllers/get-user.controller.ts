import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '@thinkpro/thinkpro-api/shared-feature-dtos';
import { ApiErrors } from '@thinkpro/thinkpro-api/shared-utils-decorators';
import { GetUserService } from '../services';

@Controller('users')
@ApiTags('users')
@ApiErrors()
export class GetUserController {
  constructor(private getUserService: GetUserService) {}

  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  getUser(@Param('id') id: number) {
    return this.getUserService.getUser(id);
  }
}
