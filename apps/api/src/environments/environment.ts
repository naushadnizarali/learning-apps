export const environment = {
  production: false,

  /* TypeORM for database: aes */
  db_aes_host: 'az-nnrsql1g.nnrglobal.com', // 'az-nnrsql1g.nnrglobal.com'
  db_aes_port: 1433,
  db_aes_name: 'aes',
  db_aes_user: 'power', // 'app-aes',
  db_aes_pass: '450nnrusa450', // 'A99a35?',
  db_aes_options: { encrypt: false },
  db_aes_synchronize: false,
  db_aes_migrationsRun: false,
  db_aes_logging: false,
};
