const API_URL = 'http://localhost:3000/cliente';

async function Saludar(){
    const response = await fetch('http://localhost:3000/api/Hola')
    const data = await response.json();
    document.getElementById('saludar').textContent = data.message;
}

async function Despedirse(){
    const response = await fetch('http://localhost:3000/api/Adios')
    const data = await response.json();
    document.getElementById('despedirse').textContent = data.message;
}

async function Tiempo(){
    const response = await fetch('http://localhost:3000/api/Time')
    const data = await response.json();
    document.getElementById('tiempo').textContent = data.time;
}

let p = document.createElement("p");
p.textContent = "Consultando API...";
document.body.appendChild(p);
let lista = document.getElementById("tracks-list");

//llamada a la api de nest

async function fetchSaludo(){
    try{
        let respuesta = await fetch('/api');
        let data = respuesta.text();
        console.log(data);
        p.textContent = "La API dice " + data;
    }catch(error){
        console.log(error);
    }
}

async function fetchCanciones(){
    try {
        let canciones = await fetch('http://localhost:3000/api/tracks');
        let datosDeCanciones = await canciones.json();
        console.log(datosDeCanciones);
        renderizar(datosDeCanciones);
    } catch (error){
        console.log(error);
    }
}

function renderizar(parametroCanciones){
    console.log("llamo a renderizar");
    const lista = document.getElementById("tracks-list");
    for (let i = 0; i < parametroCanciones.length; i++){ 
        console.log(parametroCanciones[i]);
        let li = document.createElement("li");
        li.textContent = parametroCanciones[i].title; 
        lista.appendChild(li);
    }
}


document.getElementById('createBtn').addEventListener('click', crearCliente);
document.getElementById('getId').addEventListener('click', obtenerCliente);
document.getElementById('deleteId').addEventListener('click', eliminarCliente);
document.getElementById('updateBtn').addEventListener('click', editarCliente);

async function obtenerCliente(){
    const id = document.getElementById("getIdinput").value;
    const respuesta = await fetch(API_URL + "/" + id);
    const data = await respuesta.json();
    document.getElementById("getResult").textContent = JSON.stringify(data,null,2);
}

async function eliminarCliente(){
    const id = document.getElementById("inputDeleteId").value;
    try{
        const respuesta = await fetch(API_URL + "/" + id,
            {method:'DELETE'});
            if(!respuesta.ok){
                throw new Error("no se pudo eliminar al cliente");
            }
            const data = await respuesta.json();
            document.getElementById("deleteResult").innerHTML = "Cliente eliminado";
    }catch(error){
        console.log(error.message + " no se pudo eliminar el cliente");
    };
}


async function crearCliente(){
    const cliente = {
        nombre: document.getElementById("nombre").value,
        apellido:document.getElementById("apellido").value,
        direccion:document.getElementById("direccion").value,
        activo:document.getElementById("activo").value
    }

    try{
        const respuesta = await fetch(API_URL,
            { method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(cliente),
        });
        if(!respuesta.ok){
            throw new Error("no se pudo crear el cliente");
        }else{
            document.getElementById("createResult").innerHTML = "Cliente Creado!!";
        }
        }
        catch(error){
             document.getElementById("createResult").innerHTML = "Cliente NO SE PUDO CREAR!! "+error.message;
        }
}

async function editarCliente(){
    const cliente = {
        id: document.getElementById("updateId").value,
        nombre: document.getElementById("updateNombre").value,
        apellido:document.getElementById("updateApellido").value,
        direccion:document.getElementById("updateDireccion").value,
        activo:document.getElementById("updateActivo").value
    };

    if(!cliente.id || !cliente.nombre || !cliente.apellido || !cliente.direccion || !cliente.activo){
    document.getElementById("updateResult").innerHTML = "Complete todos los campos";
    return;
    }

    try{
        const respuesta = await fetch(API_URL + "/" + cliente.id,
            { method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(cliente),
        });
        if(!respuesta.ok){
            throw new Error("No se pudo editar el cliente");
        }

        document.getElementById("updateResult").innerHTML = "Cliente Editado!!";  
    }catch(error){
        document.getElementById("updateResult").innerHTML = error.message;
    }
}
