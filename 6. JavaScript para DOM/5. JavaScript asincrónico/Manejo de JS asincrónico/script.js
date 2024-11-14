/*s
// FUNCION SINCRON NORMAL
function myfunction() {
  console.log("Hola Mundo!!");
}

// FUNCION ASÍNCRONA USANDO PROMESAS
function myfunction() {
  return Promise.resolve("Hola Mundo!!");
}

// FUNCION ASÍNCRONA USANDO ASYNC
async function myfunction() {
  return "Hola Mundo!!";
}

// FUNCION LANDA SINCRONA NORMAL
const myfunction = () => {
  console.log("Hola Mundo!!");
};

// FUNCION LANDA ASÍNCRONA USANDO PROMESAS
const myfunction2 = () => Promise.resolve("Hola Mundo!!");

// FUNCION LANDA ASÍNCRONA USANDO ASYNC
const myFunction3 = async () => "Hola Mundo!!";
*/

function changeText(text) {
  document.getElementById("async-text").innerText = text;
}

// Se ve como una función normal solo usando async
async function myFunction() {
  return "Hola Mundo!!";
}

// Se utiliza then si es positivo como en una promesa
myFunction().then(function (value) {
  changeText(value);
});

const changeText2 = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola Mundo!!");
    }, 3000);
  });
  document.getElementById("async-text2").innerText = await myPromise;
};

changeText2();

async function fetchData() {
  //Unfunción asíncrona que llama a la API de json place holder (API FALSA)
  try {
    // Intenta hacer esto:
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ); // La respuesta de la promesa se guarda en response

    if (!response.ok) {
      //Si no es ok (puede ser un 400, 500, etc)
      throw new Error("Hubo un problema al hacer el llamado a la API"); // Va a lanzar un error con un mensaje
    }
    const data = await response.json(); // Si estuviese ok la respuesra (200) se guarda en data
    document.getElementById("async-text3").innerText = data.title;
  } catch (error) {
    document.getElementById("async-text3").innerText = error;
  }
}
fetchData();
