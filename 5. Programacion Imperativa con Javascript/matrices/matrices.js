//crear una matriz: es un arreglo de arreglos
//opcion 1
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//opcion 2
let arrayMatriz = [];
let fila1 = ["x0", "x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

//visualizar una matriz
console.table(matriz);

//acceder a un elemento de la
console.log(matriz[2][2]);

//modificar un elemento de la matriz
matriz[0][1] = 20;
console.table(matriz);

//recorrer una columna de la matriz
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][0]);
}

//recorrer una fila de la matriz
for (let i = 0; i < matriz[1].length; i++) {
  console.log(matriz[1][i]);
}

//recorrer la totalidad de los datos de la matriz
console.log("recorro toda la matriz: ");
for (let i = 0; i < matriz.length; i++) {
  //para recorrer las FILAS
  for (let j = 0; j < matriz[i].length; j++) {
    //para recorrer las COLUMNAS
    console.log(matriz[i][j]);
  }
}

//filtrar por numeros pares
console.log("los pares son: ");
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] % 2 == 0) {
      console.log(matriz[i][j]);
    }
  }
}
