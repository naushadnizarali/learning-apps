import { Controller, Get, Post, Body } from '@nestjs/common';

import { Message } from '@learning-apps/api-interfaces';

import { AppService } from './app.service';

import ShipStation from 'shipstation-node';
const shipstationI = new ShipStation({apiKey: 'c336cbc277cc487eba23545e121ac54b', apiSecret: 'b33401fb4c944cbbbe9480cce56d0191'});

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('shipment')
  async shipment(@Body() param: any) {
    const bodyString = JSON.stringify(param);
    const rawRequestText = `@Body()>>> ${bodyString} `;

    console.debug('bodyString', bodyString);
    console.debug('rawRequestText', rawRequestText);

    return { bodyString, rawRequestText };
  }

  @Get('orders')
  async orders() {
    return await shipstationI.shipments.getAll()
  }
}
