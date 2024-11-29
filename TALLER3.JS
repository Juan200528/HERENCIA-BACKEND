function Vehiculo(marca) {
    this.marca = marca; // Asigna la propiedad marca al objeto Vehiculo
}

// Método arrancar para la clase Vehiculo
Vehiculo.prototype.arrancar = function () {
    console.log("El vehiculo ha arrancado"); // Mensaje al arrancar el vehículo
};

function Coche(marca, modelo) {
    Vehiculo.call(this, marca); // Llama al constructor de Vehiculo para inicializar marca
    this.modelo = modelo; // Asigna la propiedad modelo al objeto Coche
}

// Establecer la herencia del prototipo
Coche.prototype = Object.create(Vehiculo.prototype); // Coche hereda métodos de Vehiculo

// Corregir el constructor de Coche
Coche.prototype.constructor = Coche; // Asegura que el constructor apunte correctamente a Coche

// Añadir método mostrarInfo al prototipo de Coche
Coche.prototype.mostrarInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`); // Imprime la información del coche
};

// Crear una instancia de Coche
const miCoche = new Coche('Toyota', 'Corolla'); // Crea un objeto de tipo Coche

// Llamar a los métodos
miCoche.arrancar();      // Output: El vehiculo ha arrancado.
miCoche.mostrarInfo();   // Output: Marca: Toyota, Modelo: Corolla
