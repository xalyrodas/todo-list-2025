import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informaciones } from "../components/informacion/informacionComponent.js";


export function dashboard() {

    let seccion = document.createElement('section');
    seccion.className = "dashboard";


    //header
    seccion.appendChild(header())   


    // Base de datos de tareas
let tareasDb = [
    { 
        indice: 1,
        titulo: "Hola mundo1", 
        estado: "completado", 
        fechaAs: "17/05/2025", 
        fechaEn: "30/07/2025",
        integrantes: ["😇", "😊", "😎"]
    },
    { 
        indice: 2,
        titulo: "Hola mundo2", 
        estado: "pendiente", 
        fechaAs: "18/05/2025", 
        fechaEn: "31/07/2025",
        integrantes: ["😇", "😎"]
    },
    { 
        indice: 3,
        titulo: "Hola mundo3", 
        estado: "en progreso", 
        fechaAs: "19/05/2025", 
        fechaEn: "01/08/2025",
        integrantes: ["😊"]
    }
];


     // Contenedor para las dos secciones
     let contenedor = document.createElement('section');
     contenedor.className = "contenedor-secciones";
      // Añadimos las dos secciones dentro del contenedor
    contenedor.appendChild(tareas(tareasDb));
    contenedor.appendChild(informaciones(tareasDb[0]));





    seccion.appendChild(contenedor);

 
    seccion.appendChild(footer())

    return seccion
}
document.body.appendChild(dashboard());