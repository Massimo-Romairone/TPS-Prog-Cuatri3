import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ayacucho')
export class AppController {
  constructor(private readonly appService: AppService) {}

// OBTENER LA LISTA COMPLETA DE CANCIONES
  @Get('all')
  getTracks(){
    return this.appService.getTracks();
  }

// OBTENER CANCION SEGUN EL ID

  @Get(':id')
  getOne(@Param('id') id:string){
    return this.appService.getOne(id);
  }

// AGREGAR UNA CANCION 

  @Post('crear')
  create(@Body() track:any){
    return this.appService.create(track)
  }

// EDITAR UNA CANCION

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any){
    return this.appService.update(id, body);
  }

// ELIMINAR UNA CANCION

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.appService.delete(id);
  }
}
