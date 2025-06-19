import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity/producto.entity';
import { ProductoDto } from './dto/producto.dto/producto.dto';
import { UpdateProductoDto } from './dto/producto.dto/updateProducto.dto';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService:ProductoService){}

    @Get()
    async findAll():Promise<Producto[]>{
        return this.productoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:number):Promise<Producto | null> {
        return this.productoService.findOne(id);
    }
    @Delete(':id')
    async remove(@Param('id') id:number){
        return this.productoService.remove(id);
    }

   @Post()
    async create(@Body() dto: ProductoDto) {
         return this.productoService.create(dto);
    }

    //Ejercicio 8
    @Patch('updateProducto/:id')
    async update(@Param('id', ParseIntPipe) id:number, @Body(new ValidationPipe({ transform: true})) dto:UpdateProductoDto):Promise<Producto>{
        return this.productoService.update(id, dto);
    }
}
