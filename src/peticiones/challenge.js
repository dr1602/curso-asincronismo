export function runCode(url) {
    // Tu código aquí 👈
    try {
        const API = url;
        const isValidUrl = urlString=> {
            var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
            '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
            return !!urlPattern.test(urlString);
        }

        const response = fetch (url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON,
        })

    } catch(error) {
        if(isValidUrl(API) == true) {
            throw new Error('Something was wrong');
        } else if(isValidUrl(API) == false) {
            throw new Error('Invalid URL');
        } else {
            throw new Error('Invalid URL');
        }
    }
  }
  

  //////

  // Respuesta correcta:

  export async function runCode(url) {
    try { // validar formato correcto url
      new URL(url);
    } catch (e) {
      throw new Error('Invalid URL');
    }
    try { // validar que exista url
      const response = await fetch(url)
      return response.json();   
    } catch (e) {
      throw new Error('Something was wrong');
    }
  }