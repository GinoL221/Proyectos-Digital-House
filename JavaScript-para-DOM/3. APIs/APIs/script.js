const geolocation = document.getElementById("ubicacion");

const showPosition = (position) => {
  geolocation.innerHTML =
    "Latitud: " +
    position.coords.latitude +
    "<br>Longitud: " +
    position.coords.longitude;
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    geolocation.innerHTML =
      "La geolocalización no es soportada por este navegador.";
  }
};

// (Opcional) Manejar errores de geolocalización
const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      geolocation.innerHTML =
        "Permiso denegado para acceder a la geolocalización.";
      break;
    case error.POSITION_UNAVAILABLE:
      geolocation.innerHTML = "Información de ubicación no disponible.";
      break;
    case error.TIMEOUT:
      geolocation.innerHTML = "La solicitud de ubicación ha caducado.";
      break;
    default:
      geolocation.innerHTML = "Ocurrió un error desconocido.";
  }
};

const doValidationNumber = () => {
  const number = document.getElementById("number");
  document.getElementById("error").innerHTML = number.checkValidity()
    ? "El número es correcto"
    : number.validationMessage;
};

const doValidationName = () => {
  const number = document.getElementById("name");
  document.getElementById("error").innerHTML = number.checkValidity()
    ? "El numero es correcto"
    : "El nombre es necesario, debes completar este campo";
};

const goBackx2 = () => window.history.go(-2); // Permite regresar en la historia dos veces
const goBack = () => window.history.back(); // Permite regresar en la historia
const goForward = () => window.history.forward(); // Permite avanzar en la historia
const goFowardx2 = () => window.history.go(2); // Permite avanzar en la historia dos veces
