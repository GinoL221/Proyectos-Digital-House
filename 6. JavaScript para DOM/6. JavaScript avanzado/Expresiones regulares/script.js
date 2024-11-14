// patron/modificaciones

// Modificadores desponibles:
// i -> No distingue entre mayusculas y minusculas
// g -> Busca todas las ocurrencias del string
// m -> Multilinea
// d -> Que coincida al comienzo y al final

const text = "Estudia en Digital House";
// const res = text.search("Digital House"); // Devuelve la posicion del string que se busca
const res = text.replace(/digital house/i, "DH"); // Reemplaza el string que se busca por otro string

console.log(res);

document.getElementById("text").innerHTML = text;
document.getElementById("res").innerHTML = res;
