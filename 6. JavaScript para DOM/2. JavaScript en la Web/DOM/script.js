/*
const ready = confirm(
  "¿Ya hiciste ls cursos de Maquetacion y Programacion Imperativa?"
); //Booleano
const res = prompt(
  "¿Cual es tu lenguaje de prgramacion favorito?",
  "JavaScript"
); //String
*/

/*
const displayDate = () => (document.getElementById("test").innerHTML = Date());

document.getElementById("test").innerHTML = "Hola Mundo desde JavaScript";

document.getElementById("btn").onclick = displayDate; //No abro parentesis porque no quiero que se ejecute cuando se le de click
*/

// Creando un node de tipo parrafo
const paragraph = document.createElement("p");
// Aca creacion de un nodo de texto
const node = document.createTextNode("Este es un nuevo parrafo");
// Incorporamos el nodo de texto al nodo de parrafo
paragraph.appendChild(node);

// En la variable container tenemos el DIV
const container = document.getElementById("div1");
const p1 = document.getElementById("p1");

container.insertBefore(paragraph, p1);

// Eliminamos los parrafos 1 y 2 de distintas maneras
const p2 = document.getElementById("p2");
p2.remove();
container.removeChild(p1);

// Reemplazamos el parrafo 3 por el parrafo que creamos
const p3 = document.getElementById("p3");
container.replaceChild(paragraph, p3);
