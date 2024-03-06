import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// Entities
import entities from './entities';

const getServerConfig = (): TypeOrmModuleOptions => {
  const serverConfig = {
    type: 'postgres',
    host: process.env['DB_HOST'],
    port: process.env['DB_PORT'],
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_DATABASE'],
    entities: entities,
    synchronize: false,
  };

  return serverConfig as TypeOrmModuleOptions;
};

export default getServerConfig;
