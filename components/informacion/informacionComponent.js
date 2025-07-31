export function informaciones(data) {
    // Contenedor principal
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-tarea";

    // Contenedor de botones superiores
    let botones = document.createElement('div');
    botones.className = "botones-superiores";

    let btnTarea = document.createElement('button');
    btnTarea.textContent = "+ tarea";
    btnTarea.className = "btn-tarea";

    let btnArchivados = document.createElement('button');
    btnArchivados.textContent = "Archivados";
    btnArchivados.className = "btn-archivados";

    botones.appendChild(btnTarea);
    botones.appendChild(btnArchivados);

    // Tarjeta de información
    let tarjeta = document.createElement('div');
    tarjeta.className = "div-informacion";

    // Estado
    let estado = document.createElement('div');
    estado.className = "estado";
    estado.textContent = data.estado;

    // Título
    let titulo = document.createElement('h3');
    titulo.textContent = data.titulo;

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.textContent = data.descripcion;

    // Fechas
    let fechas = document.createElement('p');
    fechas.textContent = `Asignada: ${data.fechasAs} | Entrega: ${data.fechaEn}`;

    // Integrantes
    let integrantes = document.createElement('div');
    integrantes.className = "integrantes";

    let label = document.createElement('p');
    label.textContent = "Integrantes";

    let avatares = document.createElement('div');
    avatares.className = "avatares";

    data.integrantes.forEach((emoji) => {
        let span = document.createElement('span');
        span.className = "avatar-emoji";
        span.textContent = emoji;
        avatares.appendChild(span);
    });

    integrantes.appendChild(label);
    integrantes.appendChild(avatares);

    // Ensamblar la tarjeta
    tarjeta.appendChild(estado);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(fechas);
    tarjeta.appendChild(integrantes);

    // Ensamblar todo
    contenedor.appendChild(botones);
    contenedor.appendChild(tarjeta);

    return contenedor;
}
