import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private baseUrl = 'http://localhost:3001/tracks';

  async getTracks(){
    let respuesta = await fetch(this.baseUrl);
    let datos = await respuesta.json();
    return datos;
  }

  async getOne(id: string){
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();
    return data;
  }

  async create(track:any){
    const response = await fetch(this.baseUrl,
      {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(track),
      }
    )
    const data = await response.json();
    return data;
  }
  
  async update(id:string, body:any){
    const response = await fetch(`${this.baseUrl}/${id}`,
      {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      }
    )
    const data = await response.json();
    return data;
  }

  async delete(id:string){
    const response = await fetch(`${this.baseUrl}/${id}`,
      {
        method: 'DELETE'
      }
    )
    if(!response.ok){
      throw new Error('Error al eliminar el track')
    }else{
      return {message: `Track con id ${id} eliminado correctamente` };
    }
  }
}
