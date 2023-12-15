import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) {
    const response = fetch (urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin', // si es same origin, no es obligatorio
        headers: {
            'Content-Type': 'application/json' // existen otros tipos de contenido o configuraciones dentro de fetch
        },
        body: JSON.stringify(data) //la obtengo como objeto y la quiero volver texto
    });
    return response;
}

const data = {
    "title": "FLDSMDFR",
    "price": 999999999,
    "description": "Una máquina que puede convertir el agua en comida, inventada por Flint Lockwood",
    "categoryId": 1,
    "images": ["https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))