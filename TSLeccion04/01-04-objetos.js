let x = 10;// variable de tipo primitiva
console.log(x.length);

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma:'es',
    get lang(){
        return this.idioma.toLocaleUpperCase(); //Convierte las minusculas en mayusculas
    },
    set lang(lang){
        this.idioma = lang.toLocaleUpperCase();
    },
    nombreCompleto: function(){ //Metodo o funcion en JavaScript
        return this.nombre + ' ' +this.apellido;
    },
    get nombreEdad(){
        return this.nombre+ ' edad:'+ this.edad;
    }
     
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '52890712';
console.log(persona2.telefono);

console.log(persona['apellido']);//Accedemos como si fuera un arreglo

//For in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
persona.apellida = 'Betancud'; //Cambiamos dinamicamente el valor de un objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//Distinta formas de imprimir un objeto
//1_ Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' +persona.apellido)
//2_ A traves de un ciclo for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//3_ La funcion Object.values()
let personaArray = Object.values(persona);
console.log(personaArray);

//4_ Utilizaremos el metodo JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre,apellido,email){ //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo','Lopez','lopezl@gmail.com');
padre.nombre = 'Luis'; //Modificamos el nombre
padre.telefono = '5435345345'; //Propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la funcion
let madre = new Persona3('Laura','Contrera','contrera@gmail.com')
console.log(madre);
console.log(madre.telefono); //La propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//Caso objeto 1
let miObjeto = new Object(); //Esta es una opcion formal
//Caso objeto 2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//caso String 1
let miCadena1 = new String ('Hola'); //Sintaxis formal
//Caso String 2
let miCadena2 = 'Hola'; //Sintaxis recomendada

//Caso con numeros 1
let miNumero = new Number(1); //Formal
//Caso con numeros 2
let miNumero2 = 1; //Recomendada

//Caso boolean 1
let miBollean1 = new Boolean(false);//Formal
//Caso boolean 2
let miBoolean2 = false; //Recomendada

//Caso Arreglos 1
let miArreglo1 = new Array(); //Formal
//Caso arreglos 2 
let miArreglo2 = [];//Recomendada

//Caso funcion 1 
let miFuncion1 = new function(){};
let miFuncion2 = function (){};

//Uso de prototype
Persona3.prototype.telefono = '12121212';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '32323232'
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto2: function(titulo,telefono){
        return titulo + ': ' + this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre : 'Carlos',
    apellido: 'Lara'
}
console.log(persona4.nombreCompleto2('lic', '232323'));
console.log(persona4.nombreCompleto2.call(persona5,'Ing','44444'));

//Metodo Apply
let arreglo = ['ing','666666'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));