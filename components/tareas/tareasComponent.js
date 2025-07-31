import { tarea } from "../../modules/itemTarea/itemTareas.js";

export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas";

    // Recorremos la base de datos y creamos cada tarea
    tareasDb.forEach((e) => {
        div.appendChild(
            tarea(
                e.indice,
                e.titulo,
                e.estado,
                e.fechaAs,
                e.fechaEn,
                e.integrantes
            )
        );
    });

    return div;
}
