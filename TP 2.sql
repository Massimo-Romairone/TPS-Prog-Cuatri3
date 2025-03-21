use ayacucho;

-- Ejercicio 1: Selecciona todos los registros de una tabla.
select * from e01_cliente;

-- Ejercicio 2: Selecciona todos los productos de una determinada marca (definida por el usuario)
select * from e01_producto where marca = 'Vel Foundation';

-- Ejercicio 3: Selecciona todos los productos en orden alfabético ascendente por nombre.
select * from e01_producto order by nombre asc;

-- Ejercicio 4: Agrega un nuevo producto a la tabla.
insert into e01_producto (codigo_producto, marca, nombre, descripcion, precio, stock) values (999, 'Massimo Corporation', 'Massimo', 'DescripcionProd', 999.10, 100);
select * from e01_producto where codigo_producto = 999;

-- Ejercicio 5: Actualiza el precio del producto con ID 5 a 49.99.
select * from e01_producto where codigo_producto = 5;
update e01_producto set precio = 100 where codigo_producto = 5;

-- Ejercicio 6: Elimina el producto con ID 3.
select * from e01_producto where codigo_producto = 3;
delete from e01_producto where codigo_producto = 3;

-- Ejercicio 7 (SELECT con BETWEEN): Selecciona todos los productos cuyo precio esté entre $10 y $50.
select * from e01_producto where precio between 10 and 50;

-- Ejercicio 8: Selecciona todos los productos cuyo precio sea mayor que el precio promedio de todos los productos.
select * from e01_producto where precio > (select avg(precio) from e01_producto);

-- Ejercicio 9 (UPDATE Simple): Actualiza el precio de todos los productos en la marca "Nulla Dignissim Institute" para que sea $5 más caro.
select * from e01_producto where marca = 'Nulla Dignissim Institute';
set SQL_SAFE_UPDATES = 0;
update e01_producto set precio = precio + 5 where marca = 'Nulla Dignissim Institute';
set SQL_SAFE_UPDATES = 1;

-- Ejercicio 10 (SELECT con NOT, AND, OR): Selecciona todos los telefonos cuyo codigo de area no sea 844  y su numero sea mayor que 4369984 o su tipo sea F.
select * from e01_telefono;
select * from e01_telefono where codigo_area not in (844) and (nro_telefono > 4369984 or tipo = 'F');

-- Ejercicio 11: Selecciona los 10 productos más caros.
select * from e01_producto;
select * from e01_producto order by precio desc limit 10;

-- Ejercicio 12 (SELECT con LIKE): Selecciona las facturas cuya fecha contiene el año "2016".
select * from e01_factura;
select * from e01_factura where fecha like '2016%';

-- Ejercicio 13 (INSERT Simple): Agrega un nuevo producto a la tabla con el nombre "Nuevo Producto" y un precio de $29.99.
insert into e01_producto (codigo_producto, marca, nombre, descripcion, precio, stock) values (998, 'Massimo Corporation', 'Nuevo Producto', 'Descripcion', 29.99, 555);
select * from e01_producto where codigo_producto = 998;

-- Ejercicio 14 (UPDATE con NOT, AND, OR): Incrementa el precio de todos los productos en un 5%, pero solo si su precio actual es inferior a $50 o su nombre no contiene "descuento".
select * from e01_producto;
set SQL_SAFE_UPDATES = 0;
update e01_producto set precio = precio * 1.05 where (precio < 50 or nombre not like '%descuento%') and stock > 100;
set SQL_SAFE_UPDATES = 1;
select * from e01_producto;

-- Ejercicio 15 (SELECT con <> y AND): Selecciona los teléfono que no sean del tipo F y cuyo número no sea mayor  a 4892549
select * from e01_telefono;
select * from e01_telefono where tipo <> 'F' and nro_telefono < 4892549;

