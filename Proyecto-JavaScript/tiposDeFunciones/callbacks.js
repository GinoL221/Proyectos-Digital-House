//funcion que recorre array ejecuta un callback
function procesarArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

//funcion de callbacks que muestre los elementos del array
function mostrarElemento(elemento) {
  console.log(elemento);
}

let array = [1, 2, 3, 4, 5];

procesarArray(array, mostrarElemento);
