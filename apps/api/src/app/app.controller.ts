import { Controller, Get, Body } from '@nestjs/common';

import { Message } from '@learning-apps/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('shipment')
  async shipment(@Body() param: any) {
    const bodyString = JSON.stringify(param);
    const rawRequestText = `@Body()>>> ${bodyString} `;

    console.debug('bodyString', bodyString);
    console.debug('rawRequestText', rawRequestText);

    return { bodyString, rawRequestText };
  }
}
