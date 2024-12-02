let array = [14, 35, 3, 6, 3, 74, 2, 10];
let elementoBuscado = 3;

function busquedaLineal(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;
}

let indiceEncontrado = busquedaLineal(array, elementoBuscado);
if (indiceEncontrado === -1) {
  console.log("Elemento no encontrado");
} else {
  console.log("Elemento encontrado en la posición: " + indiceEncontrado);
}
