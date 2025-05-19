use reserva;

db.pasajeros.insertMany([
    {
        nombre:"Massimo Romairone",
        dni:"12345",
        email:"massimo@gmail.com",
        pais:"Argentina",
        fechaNacimiento: ISODate("1999-10-03")
    },
    {
        nombre:"Victoriano Feijoo",
        dni:"67890",
        email:"victoriano@gmail.com",
        pais:"Argentina",
        fechaNacimiento: ISODate("1998-05-14")
    },
    {
       nombre:"Pedro Gomez",
        dni:"57684",
        email:"pedro@gmail.com",
        pais:"Argentina",
        fechaNacimiento: ISODate("1978-01-22") 
    },
    {
        nombre:"Juan Perez",
        dni:"47920",
        email:"juan@gmail.com",
        pais:"Argentina",
        fechaNacimiento: ISODate("2000-01-01")
    },
    {
        nombre:"Maria Martinez",
        dni:"36856",
        email:"maria@gmail.com",
        pais:"Argentina",
        fechaNacimiento: ISODate("2005-03-13")
    }])
    
    
    
    db.vuelos.insertMany([
        {
            nombreAerolinea: "Aerolineas Argentinas",
            numeroVuelo: 123,
            destino: "Brasil",
            despegue: "13:00"
        },
        {
            nombreAerolinea: "Aerolineas Argentinas",
            numeroVuelo: 214,
            destino: "Chile",
            despegue: "22:00"
        },
        {
            nombreAerolinea: "Aerolineas Argentinas",
            numeroVuelo: 404,
            destino: "Uruguay",
            despegue: "08:00"
        }])



    db.reservas.insertMany([
    {
        idPasajero: ObjectId("682a1fa7157e9f69cb2adc1e"),
        idVuelo: ObjectId("682a2174157e9f69cb2adc23"),
        fechaReserva: ISODate("2025-05-18T09:00:00Z"),
        estado: "confirmada"
    },
    {
        idPasajero: ObjectId("682a1fa7157e9f69cb2adc1f"),
        idVuelo: ObjectId("682a2174157e9f69cb2adc24"),
        fechaReserva: ISODate("2025-05-19T15:30:00Z"),
        estado: "cancelada"
    },
    {
        idPasajero: ObjectId("682a1fa7157e9f69cb2adc20"),
        idVuelo: ObjectId("682a2174157e9f69cb2adc25"),
        fechaReserva: ISODate("2025-05-20T11:00:00Z"),
        estado: "confirmada"
    },
    {
        idPasajero: ObjectId("682a1fa7157e9f69cb2adc22"),
        idVuelo: ObjectId("682a2174157e9f69cb2adc25"),
        fechaReserva: ISODate("2025-05-20T15:30:00Z"),
        estado: "cancelada"
    }
    ]);
