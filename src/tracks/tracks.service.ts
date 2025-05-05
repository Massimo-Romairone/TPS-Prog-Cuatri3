import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class TracksService {

    private baseUrl = 'http://localhost:3001/tracks/';

    async getAll(){
        try{                   
            const response = await fetch(this.baseUrl);

            if(!response.ok)
                throw new NotFoundException('No se encontraron tracks en esa url');       
       
            const data = await response.json();
            return data;
        } catch(err){
            if(err instanceof NotFoundException){
                throw new NotFoundException('No se encontraron tracks en esa url');
            }
            throw new Error('Fallo el metodo getAll()')
        }

    }
    
    async getOne(id:string){
        try{
            const response = await fetch(this.baseUrl + id);

            if(!response.ok){
                throw new NotFoundException(`Track con id ${id} no encontrado`);
            }

            const data = await response.json();
            return data;
        }catch(error){
            throw new HttpException(`Error al buscar el track: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(track:any){
        try{
            const response = await fetch(this.baseUrl,
                {
                    method:'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(track)
                }
            )

            if(!response.ok){
                if(response.status === 400){
                    throw new ConflictException('El track que intentas crear ya existe');
                }
                if(response.status === 409){
                    throw new BadRequestException('Los datos que ingreso para el track son incorrectos');
                }
            }
            const data = await response.json();
            return data;
        }catch(error){
            throw new HttpException(`Error al crear el track: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id:number,body:any){
        try{
            const response = await fetch(this.baseUrl + "/" + id,
                {
                    method:'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                }
            )

            if(!response.ok){
                if(response.status === 404){
                    throw new NotFoundException('El track que intentas modificar no existe');
                }
                if(response.status === 400){
                    throw new BadRequestException('Los datos que ingreso para el track son incorrectos');
                }
                throw new HttpException('Error al actualizar el track', HttpStatus.INTERNAL_SERVER_ERROR);
            }

            const data = await response.json();
            return data;
        }catch(error){
            throw new HttpException(`Error al actualizar el track: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id:number){
        try{
            const response = await fetch(this.baseUrl + "/" + id,{
                method:'DELETE'
            })

            if(!response.ok){
                if(response.status === 404){
                    throw new NotFoundException('El track que intentas eliminar no existe');
                }
                throw new HttpException('Error al eliminar el track', HttpStatus.INTERNAL_SERVER_ERROR);
            }

            return{message: `Track con id ${id} eliminado correctamente`};
        }catch(error){
            throw new HttpException(`Error al eliminar el track: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
