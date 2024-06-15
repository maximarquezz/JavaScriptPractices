// const contenedor = document.querySelector(".contenedor");
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++){
    const item = document.createElement("LI");
    const item_text = document.createTextNode("Este es el li: " + i);

    item.appendChild(item_text);
    fragment.appendChild(item);
}

contenedor.appendChild(fragment);



//De esta forma optimizamos el REFLOW y el REPAINT (básicamente los elementos se "re-pintan" cuando manipulamos el DOM).
//Primero obtenemos el elemento DIV asociado a la clase "contenedor", se le asocia a la constante "contenedor".
//Luego, creamos una constante "fragment" que CREA un Document Fragment en el documento.

//Este se encargará de almacenar todas las modificaciones del DOM para luego poder insertarlas todas juntas a través del
//FRAGMENTO CREADO, el cual "almacena temporalmente" estos cambios.

//De otra manera, en lugar de:
//?contenedor.appendChild(fragment);

//Introduciríamos directamente los elementos:
//!contenedor.appendChild(item);



const contenedor = document.querySelector(".contenedor");

for (let i = 1; i <= 5; i++) {
    const item = document.createElement("LI");
    const item_text = document.createTextNode("Este es el li: " + i);

    item.appendChild(item_text);
    contenedor.appendChild(item);
}













