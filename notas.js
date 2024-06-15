//?Variables
var color_theme = "One Dark Pro"; //Scope global
let IDE = "Visual Studio Code"; //Scope en elemento padre
const font_size = 14; //Constante

//?Otras variables
null; //Sin valor
NaN; //Not a Number
undefined; //Sin definir

//?Formas de concatenar
let phrase_one = "Hola " + nombre + ", ¿Cómo estás?";
let phrase_two = `Hola ${nombre}, ¿Cómo estás?`;

//?If y else
if (condicion){
    instrucción
}
else{
    instruccion
}

//?Arrays
let pc_one = ["Maxi-PC", "Intel Core I5", "8GB"];
//alert(pc_one[0]);

//?Arrays asociativos
let pc_two = {
    nombre: "Maxi-PC",
    procesador: "Intel Core I5 10345",
    ram: "8GB",
    espacio: "500GB",
    arquitectura: "x64"
};
//alert(pc_two["nombre"]);

//?Bucle While
let n1 = 0;

while (n1 < 10){
    n1++;
    //document.write(n1);

    if(n1 == 3){
        break;
    }
}

//?Bucle Do While
let n2 = 0;

do {
    n2++;
    //document.write(n2);
} while (n2 <= 2)

//?Bucle For
for (let i = 0; i <= 10; i++){

    if(i == 4){
        continue;
    }

    //document.write(i);
}

//?Bucle For In & For Of
let pc_three = ["Maxi-PC", "Intel Core I5", "8GB"]; //OJO: Un array original puede usar los dos, pero el asociativo solo el IN.

for (let pc_loop in pc_three){ //Muestra índice de cada elemento
    //document.write(pc_loop + "<br>");
}

for (let pc_loop of pc_three){ //Muestra valor de cada elemento
    //document.write(pc_loop + "<br>");
}

//?Funciones (return y parámetros)
function sumar(n1, n2){ //Se define la función, se establecen los parámetros necesarios a completar
    return n1 + n2; //Se retorna un valor en específico. Si no se retorna nada, la función es un procedimiento de operac. primitivas.
}

sumar(10, 20); //Llamado a la función y completado de parámetros OBLIGATORIOS (se definieron en la creación de la función)

//?Funciones ARROW o FLECHA
const restar = (n1,n2) => { //Función flecha, casi siempre es CONSTANTE, después sigue el nombre = parámetros, etc.
    return n1 + n2;
}

const restarr = n1 => { //Si es un solo parámetro se pueden obviar los paréntesis.
    return n1;
}