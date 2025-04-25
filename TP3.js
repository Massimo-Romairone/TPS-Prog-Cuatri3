use tp3;

// Sección 1: Consultas Básicas

// 1- Obtener todos los productos ordenados por precio de mayor a menor.
db.productos.find().sort({ precio: -1 });

// 2- Buscar productos que tengan un stock entre 50 y 150 unidades.
db.productos.find({ stock: { $gte: 50, $lte: 150 }});

// 3- Mostrar solo el nombre y la marca de los productos cuyo precio sea mayor a 100.
db.productos.find({ precio: { $gt: 100 }}, { nombre: 1, marca: 1 });

// 4- Encontrar productos de la marca "HP" o "Logitech".
db.productos.find({ marca: { $in: ["HP", "Logitech"] }});


// Sección 2: Filtros Avanzados

// 5- Buscar productos cuyo nombre contenga la palabra "Laptop".
db.productos.find({ nombre: { $eq: "Laptop" }});

// 6- Obtener productos que no tengan stock menor a 100.
db.productos.find({ stock: { $gte: 100 }});

// 7- Mostrar productos que tengan marca "Razer" y precio mayor a $50.
db.productos.find({ $and: [{ marca: "Razer"}, {precio: {$gt: 50}}]});

// 8- Buscar productos cuyo precio no sea ni $25 ni $100.
db.productos.find({ precio: { $nin: [25, 100]}});

// 9- Encontrar productos con un tipo de dato "int" en el campo "precio".
db.productos.find({ precio: { $type: 16 }});


// Sección 3: Modificaciones y Actualizaciones

// 10- Aumentar el precio de los productos en un 10%.

db.productos.updateMany({}, { $mul: { precio: 1.10 }});

// 11- Disminuir el stock en 5 unidades de todos los productos.

db.productos.updateMany({}, {$inc: {stock: -5}})

// 12- Agregar un campo "enOferta: true" a los productos que cuesten más de $100.

db.productos.updateMany({ precio: { $gt: 100 } }, { $set: { enOferta: true }});

// 13- Eliminar el campo "marca" de todos los productos.

db.productos.updateMany({}, {$unset: {marca: ""}});

// 14- Duplicar el stock de los productos cuyo nombre empiece con "T".

db.productos.updateMany({ nombre: { $regex: /^T/ }}, { $mul: { stock: 2 }});


// Sección 4: Eliminaciones

// 15- Eliminar productos que cuesten más de $1000.

db.productos.deleteMany({ precio: { $gt: 1000}});

// 16- Borrar productos que tengan stock igual a 0.

db.productos.deleteMany({ stock: 0});

// 17- Eliminar todos los productos excepto los de la marca "Razer".

db.productos.insertOne({ nombre: "Teclado", marca: "Razer", precio: 100, stock: 50 });
db.productos.deleteMany({ marca: {$ne: "Razer"}});


db.productos.find();