import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'canuchito222',
      database: 'ayacucho',
      autoLoadEntities: true, // Carga automáticamente todas las entidades
      synchronize: false, // Crea tablas automáticamente (desactivar en producción)
    }), ClienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
