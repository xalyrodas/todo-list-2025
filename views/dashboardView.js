export function dashboard() {
    let seccion = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.innerHTML = "Hola Mundo"
    seccion.appendChild(h1);

    return seccion;
}
document.body.appendChild(dashboard());