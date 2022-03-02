import { Injectable } from '@nestjs/common';
import { Message } from '@learning-apps/api-interfaces';
import xlsx from 'node-xlsx';
import path = require('path');

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getExcelData(): any {
    const workSheetsFromFile = xlsx.parse(
      `${path.resolve(__dirname)}/HTSNumbers.xlsx`
    );

    const filteredData = workSheetsFromFile?.[0]?.data?.slice(1, 100);

    console.log(filteredData);

    return filteredData;
  }
}
