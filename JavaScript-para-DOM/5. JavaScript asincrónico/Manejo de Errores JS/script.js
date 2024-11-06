<<<<<<< HEAD
// TRY (intentar), CATCH (capturar), FINALLY (finalmente), THROW (lanzar)
/*
try {
  unaFuncion("Hola Mundo!!");
} catch (error) {
  console.log(error.message);
  document.getElementById("error").innerHTML = error.message;
}
*/

const testNumber = () => {
  const message = document.getElementById("res"); //Seleccionamos el párrafo
  message.innerHTML = ""; //Vaciamos el parrafo

  let num = document.getElementById("input").value; //Seleccionar el valor del input (string)
  try {
    if (num.trim() == "") throw "vacío";
    if (isNaN(num)) throw "no es un número";
    num = Number(num); //Convertimos el string a número
    if (num < 1) throw "muy bajo";
    if (num > 10) throw "muy alto";
    message.innerHTML = num;
  } catch (error) {
    message.innerHTML = "El dato ingresado es: " + error;
  }
};
=======
//Try and Catch
>>>>>>> 47056092317fadb7b37a56d714f0dce34a4a836a
