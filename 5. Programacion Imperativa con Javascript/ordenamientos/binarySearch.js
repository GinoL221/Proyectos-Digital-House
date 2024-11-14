let array = [1, 2, 3, 4, 5, 6, 7];
let numeroABuscar = 5;

function busquedaBinaria(array, valorBuscado) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    const MITAD = Math.round((min + max) / 2);
    const ELEMENTOMEDIO = array[MITAD];

    if (ELEMENTOMEDIO === valorBuscado) {
      return MITAD;
    }
    if (ELEMENTOMEDIO < valorBuscado) {
      min = MITAD + 1;
    } else {
      max = MITAD - 1;
    }
  }
  return -1;
}

console.log(busquedaBinaria(array, numeroABuscar)); // 4
