// Texto

const text2 = "HTML, CSS, JavaScript y ReactJs";
const res2 = text2.match(/[A-Za-z0-9]/g); // [A-Z] -> Busca todas las letras mayusculas [a-z] -> Busca todas las letras minusculas [0-9] -> Busca todos los numeros

const pattern = /[A-Z]/; // pattern = patron

console.log(res2);
const resTest = pattern.test("HTML,CSS, JavaScript y ReactJs"); // Devuelve true si encuentra una letra mayuscula

document.getElementById("text2").innerHTML = text2;
document.getElementById("res2").innerHTML = res2;
document.getElementById("resTest").innerHTML = resTest;

// Numeros
const numbers = "01 02 03 04 5 6 7 8 9";
const res3 = numbers.match(/[0-9]/g);

console.log(res3);

document.getElementById("numbers").innerHTML = numbers;
document.getElementById("res3").innerHTML = res3;
