class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar(nombre) {
    return "Hola, soy " + this.nombre + " ¿cómo estás " + nombre + "?";
  }
  decirEdad(nombre) {
    return (
      "Soy " +
      this.nombre +
      " tengo " +
      this.edad +
      " años, ¿y tú " +
      nombre +
      "?"
    );
  }
}

class Alumno extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
  presentarse() {
    return `${super.saludar("profesor")} soy ${
      this.nombre
    } y estoy en el curso ${this.curso}`;
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }
  presentarse() {
    return `Soy el profesor ${this.nombre} y enseño ${this.materia}`;
  }
}

function saludarYDecirEdad() {
  const nombreInput = document.getElementById("nombreInput").value;
  const edadInput = document.getElementById("edadInput").value;
  const invitadoInput = document.getElementById("invitadoInput").value;

  const rolSelect = document.getElementById("rolSelect").value;

  if (
    nombreInput.trim() == "" ||
    edadInput.trim() == "" ||
    invitadoInput.trim() == ""
  ) {
    alert("Por favor, ingrese todos los datos");
    return;
  }

  let persona;

  switch (rolSelect) {
    case "Alumno":
      const cursoInput = prompt("Ingrese el curso del alumno");
      persona = new Alumno(nombreInput, edadInput, cursoInput);
      break;

    case "Profesor":
      const materiaInput = prompt("Ingrese la materia que enseña el profesor");
      persona = new Profesor(nombreInput, edadInput, materiaInput);
      break;

    default:
      alert("Debe seleccionar un rol");
      return;
  }

  const presentacion = persona.presentarse();
  const saludo = persona.saludar(invitadoInput);
  const edadMsj = persona.decirEdad(invitadoInput);

  const resultado = document.getElementById("res");
  resultado.innerHTML = `<p>${saludo}</p><p>${edadMsj}</p> <p>${presentacion}</p>`;
}
