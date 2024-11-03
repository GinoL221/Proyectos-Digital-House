// Desafio Practico
let mes = [
  [100, 200, 300, 150, 300, 200, 100],
  [400, 300, 200, 100, 200, 300, 400],
  [340, 240, 100, 200, 300, 400, 500],
  [600, 200, 300, 400, 500, 600, 700],
];
console.table(mes);

// funcion gastos de toda la semana:
function totalGastosSemanas(matriz, semana) {
  let total = 0;
  for (let i = 0; i < matriz[semana].length; i++) {
    total += matriz[semana - 1][i];
  }
  console.log("semana:" + total);
  return total;
}

// funcion gastos de un dia de la semana:
function diaDeSemana(mes, dia) {
  let total = 0;
  switch (dia.toLowerCase()) {
    case "lunes":
      dia = 0;
      break;
    case "martes":
      dia = 1;
      break;
    case "miercoles":
      dia = 2;
      break;
    case "jueves":
      dia = 3;
      break;
    case "viernes":
      dia = 4;
      break;
    case "sabado":
      dia = 5;
      break;
    case "domingo":
      dia = 6;
      break;
    default:
      console.log("Dia no valido");
      break;
  }
  for (let i = 0; i < mes.length; i++) {
    for (let j = 0; j < mes[i].length; j++) {
      if (j == dia) {
        total += mes[i][j];
      }
    }
  }
  return total;
}

// funcion gasto total del mes:
function gastosDelMes(mes) {
  let total = 0;
  for (let i = 0; i < mes.length; i++) {
    for (let j = 0; j < mes[i].length; j++) {
      total += mes[i][j];
    }
  }
  return total;
}

// funcion gastos de todas las semanas:
function gastosPorSemanaDelMes(mes, callback) {
  let array = [];
  let total = 0;
  for (let i = 0; i < mes.length; i++) {
    total = 0;
    for (let j = 0; j < mes[i].length; j++) {
      total += mes[i][j];
    }
    array.push(total);
  }
  callback(array);
}

// funcion mostrar los resultados:
function mostrarGastos(resultado) {
  console.log("Gastos de la semana 1: ", resultado);
}

// Main
console.log(totalGastosSemanas(mes, 1));
console.log(diaDeSemana(mes, "lunes"));
console.log(gastosDelMes(mes));
gastosPorSemanaDelMes(mes, mostrarGastos);
