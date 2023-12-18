const fnAsync = () => {
    return new Promise((resolve, rejecet) => {
        (true)
            ? setTimeout(() => resolve('Esto es un Async!'), 2000)
            : rejecet(new Error('Error, error, error'));
    });
}

const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hola, esto mide el comportamiento del codigo')
}

console.log('Antes')
anotherFn();
console.log('Despues')