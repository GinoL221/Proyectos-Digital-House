class Calculadora {
  #num1 = 0;
  #num2 = 0;

  constructor() {
    this.#num1 = 0;
    this.#num2 = 0;
  }

  setNum1(val1) {
    this.#num1 = Number(val1);
  }
  setNum2(val2) {
    this.#num2 = Number(val2);
  }

  getNum1() {
    return this.#num1;
  }
  getNum2() {
    return this.#num2;
  }

  sumar() {
    return this.#num1 + this.#num2;
  }
  restar() {
    return this.#num1 - this.#num2;
  }
  multiplicar() {
    return this.#num1 * this.#num2;
  }
  dividir() {
    if (this.#num2 != 0) {
      return this.#num1 / this.#num2;
    } else {
      return "No se puede dividir por 0";
    }
  }
}

function realizarOperacion(operacion) {
  const calc = new Calculadora();

  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  if (num1.trim() == "" || num2.trim() == "") {
    alert("Los campos son obligatorios");
    return;
  }

  calc.setNum1(num1);
  calc.setNum2(num2);

  let res;
  switch (operacion) {
    case "sumar":
      res = calc.sumar();
      break;

    case "restar":
      res = calc.restar();
      break;

    case "multiplicar":
      res = calc.multiplicar();
      break;

    case "dividir":
      res = calc.dividir();
      break;

    default:
      res = "Operación no válida";
      break;
  }

  document.getElementById(
    "res"
  ).innerHTML = `El resultado es: ${res} al ${operacion} los números ${calc.getNum1()} y ${calc.getNum2()}`;
}
