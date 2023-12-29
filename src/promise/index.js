// ejemplo de la estructura

const promise = new Promise ( function(resolve, reject) {
    resolve('Todo correcto')
});


// ejemplo practico con vacas

const vacas = 15;

const contarVacas = new Promise( function(resolve, reject) {
    if ( vacas > 10 ) {
        resolve(`Tenemos ${vacas}, que son las vaquitas necesarias para trabajar.`)
    } else {
        reject(`${vacas} no son las suficientes vacas para trabajar, consigue más.`)
    }
});

contarVacas.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Han terminado los cálculos.'));
