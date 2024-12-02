// Objetos en JavaScript

// Clase: molde para crear objetos
class Persona {
  // Constructor: función que instancia un objeto desde una clase
  constructor(nombre, edad) {
    this.nombre = nombre; // atributo nombre de le asigna parámetro enviedo desde instanciación
    this.edad = edad; // atributo edad de le asigna parámetro enviedo desde instanciación
  }

  // Método de clase
  saludar(nombre) {
    console.log("Hola, soy " + this.nombre + " ¿cómo estás " + nombre + "?");
  }

  // Método de clase
  decirEdad() {
    console.log("Hola soy " + this.nombre + " tengo " + this.edad + " años");
  }
}

// Instanciaciones de objetos persona1 y persona2
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Pedro", 25);

// Utilización de métodos de clase
persona1.saludar("Ana");
persona2.saludar("Luis");
persona1.decirEdad();
persona2.decirEdad();
