create database if not exists facturacionTp1;
use facturacionTp1;

create table E01_CLIENTE (
nro_cliente int,
nombre varchar(45) not null,
apellido varchar(45) not null,
direccion varchar(45) not null,
activo tinyint not null,
primary key (nro_cliente));

create table E01_TELEFONO (
codigo_area int(3) not null,
nro_telefono int(7) not null,
tipo char(1) not null,
nro_cliente int not null,
primary key (codigo_area, nro_telefono),
foreign key (nro_cliente) references E01_CLIENTE (nro_cliente) on delete no action on update no action);

create table E01_PRODUCTO (
codigo_producto int not null,
marca varchar(45) not null,
nombre varchar(45) not null,
descripcion varchar(45) not null,
precio float not null,
stock int not null,
primary key (codigo_producto));

create table E01_FACTURA (
nro_factura int,
fecha date not null,
total_sin_iva double not null,
iva double not null,
total_con_iva double not null,
nro_cliente int,
primary key (nro_factura),
foreign key (nro_cliente) references E01_CLIENTE (nro_cliente) on delete no action on update no action);

create table E01_DETALLE_FACTURA (
nro_factura int not null,
nro_item int,
cantidad float not null,
codigo_producto int not null,
primary key (nro_factura, nro_item),
foreign key (codigo_producto) references E01_PRODUCTO (codigo_producto) on delete no action on update no action,
foreign key (nro_factura) references E01_FACTURA (nro_factura) on delete no action on update no action);

