// .slice()
// sintaxis: let newArray = array.slice(start, end)
let array = [
  "manzana",
  "pera",
  "uva",
  "sandia",
  "melon",
  "platano",
  "kiwi",
  "fresa",
  "naranja",
  "mandarina",
];
let newArray = array.slice(2, 6); // ["uva", "sandia", "melon", "platano"]
console.log(newArray);

let desdeMelon = array.slice(4); // ["melon", "platano", "kiwi", "fresa", "naranja", "mandarina"]s
console.log(desdeMelon);

let ultimosDos = array.slice(-2); // ["naranja", "mandarina"]
console.log(ultimosDos);

// .splice()
// sintaxis: array.splice(start, cantidadAEliminar, item1, item2, ...)
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
meses.splice(1, 2, "Nuevo mes 1", "Nuevo mes 2");
console.log(meses); // ["enero", "Nuevo mes 1", "Nuevo mes 2", "abril", "mayo", "junio"]

// .sort()
// sintaxis: array.sort([compareFunction])
let numeros = [1, 5, 3, 2, 4];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4, 5]

let palabras = ["manzana", "pera", "uva", "sandia", "melon"];
palabras.sort();
console.log(palabras); // ["manzana", "melon", "pera", "sandia", "uva"]

// .find()
// sintaxis: array.find(callback(element[, index[, array]])[, thisArg])
let edades = [15, 20, 25, 30, 35, 40];

let mayorDeEdad = edades.find((edad) => edad >= 18);
console.log(mayorDeEdad); // 20

let primeraEdadMayorA30 = edades.find((edad) => edad > 30);
console.log(primeraEdadMayorA30); // 35

// Metodos con Callbacks

// .map()
// sintaxis: let newArray = array.map(callback(currentValue[, index[, array]])

let numeros3 = [1, 2, 3, 4, 5];
let numerosMultiplicados = numeros3.map((numero) => numero * 2);
console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]

// .filter()
// sintaxis: let newArray = array.filter(callback(element[, index[, array]])

let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros4.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [2, 4, 6, 8, 10]

// .reduce()
// sintaxis: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = numeros5.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // 55

// .forEach()
// sintaxis: array.forEach(callback(currentValue[, index[, array]])

let paises = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay"];
paises.forEach((pais) => console.log(pais));
