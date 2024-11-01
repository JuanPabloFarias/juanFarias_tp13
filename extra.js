
//Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function showNumbers(numero){
    for (let i = 1; i < 11; i++) {
        console.log(numero + i)
    }
}

//Imprimir los números entre el 1 y el 57, saltando de tres en tres.

function printEveryThree(){
    for (let i = 1; i < 58; i += 3) {
            console.log(i)
    }
}

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.


function totalSummation(){
    let resultado = 0;
    for (let i = 0; i < 101 ; i++){
        resultado += i
    }
    return resultado;
}

//Crear una función que reciba por parámetro una cadena de texto: Tendrá la responsabilidad
// de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA.

function showToUpperCase(texto){
    nuevoTexto = ""
    for (let i = 0; i < texto.length ; i++){
        nuevoTexto += texto[i].toUpperCase();
    }
    return nuevoTexto
}

//Crear una función que reciba como parámetro un array de números positivos.
//Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares.

function returnPairs(arreglo){
    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 === 0){
            nuevoArreglo.push(arreglo[i])
        }
    }

    return nuevoArreglo;
}


// showNumbers(10);
// printEveryThree();
// console.log(totalSummation());
// console.log(showToUpperCase("cadena de texto"));
// console.log(returnPairs([23, 25, 20, 12, 13, 5, 2]));


module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
    }