class Animal{

    static id;

    //CONSTRUCTORES
    constructor(especie, color, edad){
        this._especie = especie;
        this._color = color;
        this._edad = edad;
        this._id++;
    }

    //GETTERS
    get Especie(){
        return this._especie;
    }
    get Color(){
        return this._color;
    }
    get Edad(){
        return this._edad;
    }
    get Info(){
        return `Soy un ${this._especie}, tengo ${this._edad} años y soy de color ${this._color}.`;
    }

    //SETTERS
    set Especie(especie){
        this._especie = especie;
    }
    set Color(color){
        this._color;
    }
    set Edad(edad){
        this._edad;
    }

}

class Perro extends Animal{
    
    constructor(color, edad) {
        super(color, edad)
    }

    get Ladrar(){
        return document.write(`¡Guau!`);   
    }

}

let perro = new Animal("Doge", "Rojo", 3);
let perrin = new Perro("Verde", 20);

perrin.Ladrar;
Perro.id;
document.write(perro.Info);