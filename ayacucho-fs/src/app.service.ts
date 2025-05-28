import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {message:string} {
    return {message: "Hola"};
  }
  getAdios(): {message:string} {
    return {message: "Adios"};
  }

  getTiempo(): {time:string}{
    return {time: new Date().toLocaleTimeString()};
  }

  async getTracks(){
    let respuesta = await fetch('http://localhost:3030/tracks');
    let datos = await respuesta.json();
    return datos;
  }



}
