import { User } from '@thinkpro/thinkpro-api-shared-data-access-entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
