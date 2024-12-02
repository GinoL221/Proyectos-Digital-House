// Spread Operator en objetos

// Spread Operator sirve para copiar un objeto sin modificar el original
const originalObj = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

const copyObj = {
  ...originalObj,
};

console.log(originalObj === copyObj); // false

// Sirve para modificar un objeto sin modificar el original
const modifObj = { ...originalObj, pais: "Argentina", signo: "Aries" };

console.log(originalObj); // {nombre: "Juan", apellido: "Perez", edad: 30}
console.log(modifObj); // {nombre: "Juan", apellido: "Perez", edad: 30, pais: "Argentina", signo: "Aries"}
