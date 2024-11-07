// Spread operator en Arrays

// El spread operator se escribe con 3 puntos (...)
const array1 = [1, 2, 3, 4, 5];
const arraySpread = [...array1, 6, 7, 8, 9, 10];

console.log(arraySpread); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Sirve para copiar un array
const copiarArray = [...array1];

console.log(array1 === copiarArray); // false

// Sirve para pasar arrays como valores separados en una función
const numbers = [1, 2, 3, 4, 5];

function sumar(a, b, c, d, e) {
  return a + b + c + d + e;
}
const result = sum(...numbers);

console.log(result); // 15
