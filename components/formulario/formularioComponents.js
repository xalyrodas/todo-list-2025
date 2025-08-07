export function mostrarFormulario() {

    const form = document.createElement("form");
    form.className = "formulario-tarea";

    const titulo = document.createElement("input");
    titulo.placeholder = "Título";
    titulo.required = true;

    const descripcion = document.createElement("textarea");
    descripcion.placeholder = "Descripción";

    const fechaAs = document.createElement("input");
    fechaAs.value = new Date().toLocaleDateString('es-ES');
    fechaAs.readOnly = true;

    const fechaEn = document.createElement("input");
    fechaEn.type = "date";

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar tarea";
    btnGuardar.type = "submit";

    form.append(titulo, descripcion, fechaAs, fechaEn, btnGuardar);
    document.body.appendChild(form);

    alert("hola soy rokema");

    // 🔻 Agregado: evento para capturar datos al enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const datos = {
            titulo: titulo.value,
            descripcion: descripcion.value,
            fechaAsignacion: fechaAs.value,
            fechaEntrega: fechaEn.value
        };

        console.log("Tarea guardada:", datos);
        // Puedes quitar el formulario después si lo deseas:
        // form.remove();
    });
}
