import { Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiErrors } from '@thinkpro/thinkpro-api/utils-shared';
import { GetUserService } from '../services';

@Controller('users')
@ApiTags('users')
@ApiErrors()
export class CreateUserController {
  constructor(private getUserService: GetUserService) {}

  @Post('')
  @ApiOkResponse({ type: Boolean })
  getUser() {
    return true;
  }
}
