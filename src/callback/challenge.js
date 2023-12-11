const XMLHttpRequest = require('xmlhttprequest');
const API =  'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) { // estado 0 no se ha inicializado, 1 loading, 2 ejecutado, 3 interactuando o trabajando con la solicitud, 4 completada
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlAPI);
            return callback(error, null);
        }
    }

    xhttp.send();

}

