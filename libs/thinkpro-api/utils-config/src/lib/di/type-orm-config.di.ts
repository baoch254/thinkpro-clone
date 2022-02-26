import { Inject } from '@nestjs/common';
import { typeOrmConfiguration } from '../configurations';

export const InjectTypeOrmConfig = () => Inject(typeOrmConfiguration.KEY);
