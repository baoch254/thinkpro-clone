import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';

@Injectable()
export class GetUserCore {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: number) {
    return await this.userRepository.findOne(id);
  }
}
