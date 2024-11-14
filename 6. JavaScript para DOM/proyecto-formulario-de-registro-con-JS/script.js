const submitFunction = (event) => {
  event.preventDefault(); //que se prevenga la actualizacion de la web
  if (validateForm()) {
    alert(
      "Los datos enviados fueron: \n" +
        "Nombre: " +
        document.getElementById("firstname").value +
        "\n" +
        "Apellido: " +
        document.getElementById("lastname").value +
        "\n" +
        "Documento: " +
        document.getElementById("DNI").value +
        "\n" +
        "Email: " +
        document.getElementById("email").value +
        "\n" +
        "Edad: " +
        document.getElementById("age").value +
        "\n" +
        "Actividad: " +
        document.getElementById("occupation").value +
        "\n" +
        "Nivel de Estudio: " +
        document.getElementById("studies").value +
        "\n"
    );
  }
};

document.getElementById("form").addEventListener("submit", submitFunction); // escucha el envio del formulario

function validateForm() {
  // Validadcion de los campos de texto
  let texts = document.querySelectorAll('input[type="text"]');
  let validation = true;

  texts.forEach((element) => {
    let errorText = document.getElementById(
      "error" + element.id.charAt(0).toUpperCase() + element.id.slice(1)
    ); // error + id con la primera letra en mayuscula

    if (element.value.length == "") {
      showError(errorText, "¡Este campo es obligatorio!");
      validation = false;
    } else if (element.value.length < 3) {
      showError(errorText, "¡Este campo debe tener al menos 3 caracteres!");
      validation = false;
    } else {
      hideError(errorText);
    }
  });

  // Validacion del campo email
  const email = document.getElementById("email");
  let errorEmail = document.getElementById("errorEmail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    // este regex valida que el formato del email se válido
    hideError(errorEmail);
  } else {
    showError(errorEmail, "¡Ingrese un correo electrónico válido!");
  }

  // Validacion del campo edad
  const age = document.getElementById("age");
  const errorAge = document.getElementById("errorAge");

  if (age.value < 18) {
    showError(errorAge, "¡Debe ser mayor de edad para registrarse!");
    validation = false;
  } else {
    hideError(errorAge);
  }

  // Validacion de la ocupacion
  const occupation = document.getElementById("occupation");
  const errorOccupation = document.getElementById("errorOccupation");
  if (occupation.value == "") {
    showError(errorOccupation, "¡Seleccione una ocupación!");
    validation = false;
  } else {
    hideError(errorOccupation);
  }

  // Validacion de los estudios
  const studies = document.getElementById("studies");
  const errorStudies = document.getElementById("errorStudies");

  if (studies.value == "") {
    showError(errorStudies, "¡Seleccione un nivel de estudios!");
    validation = false;
  } else {
    hideError(errorStudies);
  }

  // Validar terminos y condiciones
  const acceptTerms = document.getElementById("acceptTerms");
  const errorAcceptTerms = document.getElementById("errorAcceptTerms");
  if (!acceptTerms.checked) {
    showError(errorAcceptTerms, "¡Debe aceptar los términos y condiciones!");
    validation = false;
  } else {
    hideError(errorAcceptTerms);
  }

  return validation; // retorna si la validacion fue exitosa o no
}

const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

const hideError = (element) => {
  element.textContent = "";
  element.style.display = "none";
};
