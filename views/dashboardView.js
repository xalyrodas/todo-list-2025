import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informaciones } from "../components/informacion/informacionComponent.js";

export async function dashboard() {

    try {
        const resultado = await fetch("https://backend-todo-list-1-ndxo.onrender.com/tareas");
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);

        let seccion = document.createElement('section');
    seccion.className = "dashboard";


    //header
    seccion.appendChild(header())  


     //Contenedor para las dos secciones
     let contenedor = document.createElement('section');
     contenedor.className = "contenedor-secciones";
    //Añadimos las dos secciones dentro del contenedor
    contenedor.appendChild(tareas(tareasDb));
    contenedor.appendChild(informaciones(tareasDb[0]));
    seccion.appendChild(contenedor);

    seccion.appendChild(footer())

    return seccion;
    } catch (error) {
        console.error("error:",error);
        
    }   
}

dashboard().then(elemento =>{
    document.body.appendChild(elemento);
});