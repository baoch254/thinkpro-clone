import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserService {
  getUser(id: number) {
    return 'User id ' + id;
  }
}
