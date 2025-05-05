import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TracksService } from './tracks.service';


// localhost:3000/api/tracks

@Controller('api/tracks')
export class TracksController {

    constructor(private readonly tracksService:TracksService){}

    @Get('')
    @HttpCode(HttpStatus.OK)
    getAll(){
        return this.tracksService.getAll();
    }
    
    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('id') id:string){
        return this.tracksService.getOne(id);
    }

    @Post('')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() track:any){
        return this.tracksService.create(track);
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id') id:string,@Body() body:any){
        return this.tracksService.update(+id,body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id:string){
        return this.tracksService.delete(+id);
    }

    

}
