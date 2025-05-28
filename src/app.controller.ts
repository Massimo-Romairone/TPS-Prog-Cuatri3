import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('Hola')
  getHello(): {message:string} {
    return this.appService.getHello();
  }
  @Get('Adios')
  getHola(): {message:string} {
    return this.appService.getAdios();
  }

  @Get('Time')
  getTime(){
    return this.appService.getTiempo();
  }

  @Get('tracks')
  getTracks(){
    return this.appService.getTracks();
  }
}
