import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-info')
  async getInfo(): Promise<string> {
    return this.appService.getInfo();
  }
}
