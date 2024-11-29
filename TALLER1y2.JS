class Animal {
  constructor(nombre, edad) { // Definición de la clase Animal
      this.nombre = nombre; // Asigna el nombre al objeto
      this.edad = edad; // Asigna la edad al objeto
  }

  hacerSonido() { // Método para hacer sonido
      console.log(`El animal hace un sonido`); // Mensaje genérico
  }
}

class Perro extends Animal { // Clase Perro que hereda de Animal
  constructor(nombre, edad, raza) { // Constructor específico para Perro
      super(nombre, edad); // Llama al constructor de Animal
      this.raza = raza; // Asigna la raza al objeto
  }

  hacerSonido() { // Sobrescribe el método hacerSonido
      console.log(' El perro ladra: ¡Guau!'); // Mensaje específico para perros
  } 
}

// Crear una instancia de Animal
const Animalito = new Animal(" Animal generico", 5); // Crea un objeto de tipo Animal
Animalito.hacerSonido(); // Llama al método hacerSonido de Animalito

// Crear una instancia de Perro
const Perrito = new Perro(" Asabache", 3, " Labrador"); // Crea un objeto de tipo Perro
Perrito.hacerSonido(); // Llama al método hacerSonido de Perrito
