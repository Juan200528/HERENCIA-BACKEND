class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre; // Asigna el nombre al objeto Empleado
        this.salario = salario; // Asigna el salario al objeto Empleado
    }
    
    obtenerDetalles() {
        return `Nombre: ${this.nombre}, salario: ${this.salario}`; // Devuelve una cadena con los detalles del empleado
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario); // Llama al constructor de Empleado para inicializar nombre y salario
        this.departamento = departamento; // Asigna el departamento al objeto Gerente
    }
    
    obtenerDetalles() {
        return `Nombre: ${this.nombre}, salario: ${this.salario}, departamento: ${this.departamento}`; // Devuelve los detalles, incluyendo el departamento
    }
}

// Instancias
const Empleado1 = new Empleado(" Jeronimo", 60000); // Crea una instancia de Empleado
const Gerente1 = new Gerente(" Rosero", 84000, " Santander "); // Crea una instancia de Gerente

console.log(Empleado1.obtenerDetalles()); // Imprime los detalles de Empleado1
console.log(Gerente1.obtenerDetalles()); // Imprime los detalles de Gerente1
