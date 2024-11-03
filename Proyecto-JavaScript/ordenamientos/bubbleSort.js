let array = [5, 4, 1, 6, 3, 2];

for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);

// Output:
//[1, 2, 3, 4, 5, 6]

let palabras = ["hola", "chau", "como", "estas"];

for (let j = 0; j < palabras.length; j++) {
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] > palabras[i + 1]) {
      let temp = palabras[i];
      palabras[i] = palabras[i + 1];
      palabras[i + 1] = temp;
    }
  }
}

// Output:
// [ 'chau', 'como', 'estas', 'hola' ]

let personas = [
  {
    nombre: "Lautaro",
    edad: 25,
  },
  {
    nombre: "Lucas",
    edad: 20,
  },
  {
    nombre: "Mariano",
    edad: 30,
  },
];

for (let j = 0; j < personas.length; j++) {
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad > personas[i + 1].edad) {
      let temp = personas[i];
      personas[i] = personas[i + 1];
      personas[i + 1] = temp;
    }
  }
}

// Output:
// [
//   { nombre: 'Lucas', edad: 20 },
//   { nombre: 'Lautaro', edad: 25 },
//   { nombre: 'Mariano', edad: 30 }
// ]
