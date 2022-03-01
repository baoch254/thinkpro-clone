import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';

@Injectable()
export class UpdateUserCore {
  constructor(private userRepository: UserRepository) {}

  async updateUser() {
    // await this.userRepository.update({
    //   firstName: 'Bao 2',
    //   lastName: 'Cao Hoai 2',
    //   email: 'baoch25@gmail.com',
    // }, );

    return true;
  }
}
