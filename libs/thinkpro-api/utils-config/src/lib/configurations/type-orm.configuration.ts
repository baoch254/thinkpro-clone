import { ConfigType, registerAs } from '@nestjs/config';

export const typeOrmConfiguration = registerAs('typeOrm', () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USERNAME || 'username',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DB_NAME || 'postgres',
}));

export type TypeOrmConfig = Readonly<ConfigType<typeof typeOrmConfiguration>>;
