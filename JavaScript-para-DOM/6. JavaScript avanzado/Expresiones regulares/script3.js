// ^ -> Inicio de la cadena
// $ -> Final de la cadena
// + -> Uno o mas caracteres
// * -> Cero o mas caracteres
// ? -> Cero o un caracter
// . -> Cualquier caracter

const text4 = "sergiecode@digitalhouse.com";
var pattern2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const resTest2 = pattern2.test(text4);

console.log(resTest2);

document.getElementById("text4").innerHTML = text4;
document.getElementById(
  "res4"
).innerHTML = `¿Se encontro en el texto el siguiente patron: ${pattern2}?  ${
  resTest2 ? "Si" : " No"
}`;
document.getElementById("resTest2").innerHTML = resTest2;
