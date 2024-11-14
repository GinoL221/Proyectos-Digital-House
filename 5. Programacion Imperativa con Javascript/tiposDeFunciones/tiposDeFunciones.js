//funciones declaradas
function suma(num1, num2) {
  return num1 + num2;
}
console.log(suma(2, 3));

//funciones expresadas
let resta = function (num1, num2) {
  return num1 - num2;
};
console.log(resta(2, 3));

//funcion flecha o arrow function
let multiplicacion = (num1, num2) => num1 * num2;
console.log(multiplicacion(2, 3));
