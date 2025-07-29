export function header(){
    let header = document.createElement('header');

    
    let h1 = document.createElement('h1');
    h1.innerText = "TODO-LIST";
    header.appendChild(h1);

   
    let divTarea = document.createElement('div');
    divTarea.className = "div-Tareas";

    let texto = document.createElement('span');
    texto.innerText = "pendientes";
    texto.className = "texto";
    divTarea.appendChild(texto);

    let numero = document.createElement('span');
    numero.innerText = "14";
    numero.className = "numero";
    divTarea.appendChild(numero);

    header.appendChild(divTarea);

  
    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo";

    let img = document.createElement('img');
    img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa3%2Fa0%2F44%2Fa3a044c397a292ac153c954fc5fcb739.jpg&f=1&nofb=1&ipt=06f33a6942f35bd1b9b79186ec437cec2e00bb28844efad80e38e3ca258d4445";
    img.className = "logo-img";

    divLogoUsuario.appendChild(img);
    header.appendChild(divLogoUsuario);

    return header;
}
