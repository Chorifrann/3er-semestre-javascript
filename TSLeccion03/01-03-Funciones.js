miFuncion(8,2); //Esto se le conoce como hoisting

function miFuncion(a , b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;
}

//Llamamos la funcion
miFuncion(5,4);

let resultado = miFuncion(6,7);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonima
let x = function(a,b){return a + b}; //Necesita cierre con ";"
resultado = x(5,6);//Al llamarla se pone la variable y parentesis
console.log(resultado);


//Funciones de tipo self y invoking
(function(a,b){
    console.log('Ejecutando la funcion: '+(a + b));
})(9,6);


console.log(typeof miFuncion);
function miFuncionDos(a , b){
    console.log(arguments.length);
}

miFuncionDos(5,7,3,6);

//ToString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);//Asignamos el valor a una variable
console.log(resultado);

//Funcion de tipo expresion
let sumar = function(a=4,b=8){
    console.log(arguments[0]);//muestra el parametro de a
    console.log(arguments[1]);
    return a + b + arguments [2];
}
resultado = sumar(3,2,9);
console.log(resultado);

//Sumar todos los argumentos
let respuesta = sumarTodo(5,4,13,10,9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i< arguments.length; i++){
        suma += arguments[i]; //Arguments es para arreglos
    }
    return suma;
}