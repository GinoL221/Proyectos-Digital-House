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
