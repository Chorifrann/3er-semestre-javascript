const autos = ['Ferrari', 'Renault','BMW']
console.log(autos);

//recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i< autos.length; i++){
    console.log(i+' : '+autos[i]);
}

//Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//agregamos nuevos valores al arreglo
autos.push('Audi');//Agregamos el elemnto al ffinal del arreglo
console.log(autos)

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//3era forma de agregar elementos al arreglo teniendo CUIDADO
autos[6]='Renault';
console.log(autos);

//Como preguntar si es un array o arreglo
console.log(Array.isArray(autos)); //Devuelve un boolean


console.log(autos instanceof Array); //Preguntamos si la variable es una instancia de la clase array
