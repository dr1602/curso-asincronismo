export function delay(time, message) {
    // Tu código aquí 👈

    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          resolve(message);
        }, time)
    })
    
    
}

delay(3000, 'hola')
