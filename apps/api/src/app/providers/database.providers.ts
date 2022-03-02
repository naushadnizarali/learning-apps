import { environment } from './../../environments/environment';
import { Sequelize } from 'sequelize-typescript';
import { AesCompany, ScheduleB } from '../schemas';

type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: () => {
      const sequelize = new Sequelize({
        dialect: 'mssql' as Dialect,
        host: environment.db_aes_host,
        username: environment.db_aes_user,
        password: environment.db_aes_pass,
        database: environment.db_aes_name,
        port: environment.db_aes_port,
        logging: console.log, // environment.db_aes_logging,
        retry: {
          max: 10,
        },
      });

      sequelize.addModels([AesCompany, ScheduleB]);

      return sequelize;
    },
  },
];
