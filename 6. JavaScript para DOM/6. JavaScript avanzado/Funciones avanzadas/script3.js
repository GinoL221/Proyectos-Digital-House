// Set: new Set([iterable])
/*
Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto en orden de inserción. 
Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set.
*/

const newSet = new Set([1, 2, 3, 4, 5]);

newSet.add(6);

console.log(newSet); // Set(6) {1, 2, 3, 4, 5, 6}

newSet.delete(6);

console.log(newSet); // Set(5) {1, 2, 3, 4, 5}

const newSet2 = new Set();

newSet2.add("Este ");
newSet2.add("texto ");
newSet2.add("viene de un set");

let text = "";

newSet2.forEach((element) => {
  text += element;
});

document.getElementById("write").innerHTML = text;
