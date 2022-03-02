import { Controller, Get, Inject } from '@nestjs/common';
import { Message } from '@learning-apps/api-interfaces';
import { AppService } from './app.service';
import { ScheduleB, SCHEDULEB_REPOSITORY } from './schemas';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(SCHEDULEB_REPOSITORY)
    private readonly scheduleBRepository: typeof ScheduleB
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get()
  uploadHts(): string {
    return 'Hello World!';
  }

  @Get('all')
  async findAll(): Promise<ScheduleB[]> {
    return this.scheduleBRepository.findAll<ScheduleB>({ limit: 100 });
  }

  @Get('upload')
  async upload(): Promise<any> {
    const data = this.appService.getExcelData();

    const result = [];

    if (data) {
      for (const item of data) {
        result.push(
          await this.scheduleBRepository.upsert({
            htsNo: item[0]?.toString().trim(),
            description: item[1]?.trim(),
            longDescription: item[1]?.trim(),
            unit_1: item[2] ? item[2]?.trim() : '',
            unit_2: item[3] ? item[3]?.trim() : '',
            vehicleFlag: 'N',
          })
        );
      }
    }

    return { data, result };
  }
}
