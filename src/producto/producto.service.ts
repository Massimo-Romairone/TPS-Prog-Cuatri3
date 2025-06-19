import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity/producto.entity';
import { Repository } from 'typeorm';
import { ProductoDto } from './dto/producto.dto/producto.dto';
import { UpdateProductoDto } from './dto/producto.dto/updateProducto.dto';

@Injectable()
export class ProductoService {
constructor(
    @InjectRepository(Producto)
    private productoRepository:Repository<Producto>,
){}

async findAll():Promise<Producto[]>{
    return this.productoRepository.find();
}

async findOne(id:number):Promise<Producto | null>{
    return this.productoRepository.findOne({ where: {idProducto:id}
    }
)
}

async remove(id:number){
    try{
    await this.productoRepository.delete(id);
    }catch(e){
        return "no se puede eliminar el producto";
    }
}

async create(dto: ProductoDto): Promise<Producto> {
    const existente = await this.productoRepository.findOne({
        where: { nombre: dto.nombre },
    });
    if (existente) {
        throw new Error("producto ya existe");
    }
    const producto = this.productoRepository.create({
        ...dto,
        idProducto: dto.codigo_producto, // 🔁 Mapeo manual
    });
    return this.productoRepository.save(producto);
}

    //Ejercicio 8
async update(id:number, dto:UpdateProductoDto):Promise<Producto> {
    const producto = await this.productoRepository.findOneBy({ idProducto: id });
    if(!producto){
        throw new NotFoundException("El producto no existe")
    }

    if(dto.marca !==undefined) producto.marca = dto.marca;
    if(dto.nombre !==undefined) producto.nombre = dto.nombre;
    if(dto.descripcion !==undefined) producto.descripcion = dto.descripcion;
    if(dto.precio !==undefined) producto.precio = dto.precio;
    if(dto.stock !==undefined) producto.stock = dto.stock;

    const productoActualizado = await this.productoRepository.save(producto);
    return productoActualizado;
    }
}
