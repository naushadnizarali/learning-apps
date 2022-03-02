import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './providers/database.providers';
import { ScheduleB, SCHEDULEB_REPOSITORY } from './schemas';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: SCHEDULEB_REPOSITORY,
      useValue: ScheduleB,
    },
    ...databaseProviders,
  ],
})
export class AppModule {}
