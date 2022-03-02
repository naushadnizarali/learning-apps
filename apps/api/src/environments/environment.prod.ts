export const environment = {
  production: true,

  /* TypeORM for database: aes */
  db_aes_host: 'az-nnrsql1f.nnrglobal.com',
  db_aes_port: 1433,
  db_aes_name: 'aes',
  db_aes_user: 'app-aes',
  db_aes_pass: 'A99a35?',
  db_aes_options: { encrypt: false },
  db_aes_synchronize: false,
  db_aes_migrationsRun: false,
  db_aes_logging: false,
};
