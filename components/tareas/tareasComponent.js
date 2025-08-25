import { tarea } from "../../modules/itemTarea/itemTareas.js";

export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas";

    // Recorremos la base de datos y creamos cada tarea
    tareasDb.forEach((e) => {
        div.appendChild(
            tarea(
               1,
               e.nombre,
               e.estado_tarea,
               e.fecha_asignada,
               e.fecha_entrega,
               []
            )
        );
    });

    console.log(tareasDb);

    return div;
}
