function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(1, 2, sum)); // no poner parentesis porque se invocaria inmediatamente.

// callback no es una palabra reservada, pueden usarse otros valores.

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, test) {
    return test(num1, num2);
}

console.log(calc(1, 2, sum)); // no poner parentesis porque se invocaria inmediatamente.

// SetTimeOut, son por si mismos callbacks

setTimeout(function() {
    console.log('Esto es un test de código.')
}, 3000)

setTimeout(function() {
    console.log('Esto es un test de código pero de 5 segundos.')
}, 5000)

// SetTimeOut con una function

function greetings(name){
    console.log(`Salut ${name}`)
}

setTimeout(greetings, 4500, 'Mario Alberto')

// Ejercicio: Opcion A

export function execCallback(callback) {
    // Tu código aquí 👈
  
    console.log('La función callback se está ejecutando');
    callback();

    window.setTimeout(execCallback, 2000)
  
}

//  Ejercicio: Opcion B
  
export function execCallback(callback) {
    // Tu código aquí 👈
    const num = 5;
    const response = callback(num);

    console.log(`El resultado es  ${response}`)

    // window.setTimeout(execCallback, 2000)
  
}

// Ejercicio: Opcion C

export function execCallback(callback) {

    window.setTimeout(callback, 2000)
  
}
  