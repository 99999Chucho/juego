// Definimos la función del juego
function piedraPapelTijera() {
    // Creamos un arreglo con las opciones posibles del juego: "piedra", "papel" y "tijera"
    const opciones = ["piedra", "papel", "tijera"];

    // Iniciamos un ciclo infinito para que el juego siga hasta que el jugador decida no jugar más
    while (true) {
        // Le pedimos al jugador que elija una opción y la convertimos en minúsculas para evitar errores con mayúsculas
        let usuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

        // Si la opción del jugador no es válida (no está en el arreglo de opciones), mostramos un mensaje y continuamos el ciclo
        if (!opciones.includes(usuario)) {
            alert("Opción inválida. Inténtalo de nuevo.");
            continue;  // Continuamos al siguiente ciclo sin ejecutar lo demás
        }

        // La computadora elige aleatoriamente una opción del arreglo de opciones
        let computadora = opciones[Math.floor(Math.random() * 3)];

        // Mostramos la opción que eligió la computadora
        alert(`La computadora eligió: ${computadora}`);

        // Comprobamos si el jugador y la computadora eligieron lo mismo, lo cual sería un empate
        if (usuario === computadora) {
            alert("¡Es un empate!");  // En caso de empate, mostramos este mensaje
        } else if (
            // Verificamos las combinaciones que resultan en victoria para el jugador
            (usuario === "piedra" && computadora === "tijera") ||  // Piedra vence a tijera
            (usuario === "papel" && computadora === "piedra") ||  // Papel vence a piedra
            (usuario === "tijera" && computadora === "papel")     // Tijera vence a papel
        ) {
            alert("¡Ganaste!");  // Si alguna de las condiciones anteriores es verdadera, el jugador gana
        } else {
            alert("Perdiste. Inténtalo de nuevo.");  // Si no gana ni empata, el jugador pierde
        }

        // Preguntamos al jugador si desea jugar otra vez
        let jugarDeNuevo = confirm("¿Quieres jugar otra vez?");
        
        // Si el jugador no quiere jugar más (hace clic en "Cancelar"), salimos del ciclo y terminamos el juego
        if (!jugarDeNuevo) break;
    }
}

// Llamamos a la función para iniciar el juego
piedraPapelTijera();






//FUNCIONES
/*
     FUNCIONES EN JAVASCRIPT
    Una función es un bloque de código reutilizable que realiza una tarea específica.
    Se pueden definir y ejecutar en cualquier parte del código, permitiendo modularidad y reutilización.
*/

// 1️ Funciones Declarativas
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Ana")); // Salida: Hola, Ana!

// 2️ Funciones Expresivas o Anónimas
const multiplicar = function(a, b) {
    return a * b;
};
console.log(multiplicar(3, 4)); // Salida: 12

// 3️ Funciones Flecha (Arrow Functions)
const restar = (a, b) => a - b;
console.log(restar(10, 3)); // Salida: 7

const mostrarMensaje = (mensaje) => {
    console.log("Mensaje recibido:");
    console.log(mensaje);
};
mostrarMensaje("Hola mundo!");

// 4️ Funciones Autoejecutables (IIFE)
(function() {
    console.log("Esta función se ejecuta inmediatamente");
})();

// 5️ Funciones con Parámetros por Defecto
function dividir(a, b = 2) {
    return a / b;
}
console.log(dividir(10)); // Salida: 5

/*
     Cómo funcionan las funciones en JavaScript
    1️ Declaración: Se define la función con function, const, let o =>.
    2️ Invocación: Se llama a la función con su nombre seguido de ().
    3️ Ejecución: Se ejecuta el código dentro de la función.
    4️ Retorno (opcional): Puede devolver un valor con return.
*/

// 1. Función que verifica si un número es par o impar
function esPar(numero) {
    return numero % 2 === 0 ? "Es par" : "Es impar";
}
console.log(esPar(7)); // Salida: Es impar
console.log(esPar(10)); // Salida: Es par

//  2. Función que calcula el área de un círculo
const areaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
console.log(areaCirculo(5)); // Salida: 78.5398...

//  3. Función recursiva para calcular el factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Salida: 120

/*
     Conclusión
    Las funciones en JavaScript permiten modularidad, reutilización y optimización del código.
    Dependiendo del caso, puedes usar funciones declarativas, anónimas, flecha o recursivas.
    ¡Experimenta con ellas para mejorar tus habilidades en JavaScript! 
*/







//ARREGLOS
/*
     ARREGLOS EN JAVASCRIPT
    Un arreglo es una estructura de datos que permite almacenar múltiples valores en una sola variable.
    Se pueden manipular utilizando diversos métodos y recorrer mediante bucles.
*/

// 1️ Arreglos Simples (Unidimensionales)
let frutas = ["Manzana", "Banana", "Cereza"];
console.log(frutas[0]); // Salida: Manzana

// 2️ Arreglos Multidimensionales (Matrices)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[1][2]); // Salida: 6

// 3️ Arreglos Heterogéneos
let mixto = ["Texto", 42, true, {nombre: "Ana"}];
console.log(mixto[3].nombre); // Salida: Ana

// 4️ Arreglos Vacíos y Dinámicos
let numeros = [];
numeros.push(10);
numeros.push(20);
console.log(numeros); // Salida: [10, 20]

/*
     Cómo funcionan los arreglos en JavaScript
     Pueden contener cualquier tipo de dato.
     Se pueden modificar dinámicamente.
     Los elementos se acceden mediante índices numéricos.
*/

//  Recorrer un Arreglo con forEach()
let nombres = ["Carlos", "Ana", "Luis"];
nombres.forEach((nombre, indice) => {
    console.log(`Índice ${indice}: ${nombre}`);
});

//  Agregar y Eliminar Elementos

let numeros2 = [1, 2, 3];
numeros2.push(4);
console.log(numeros2); // [1, 2, 3, 4]
numeros2.pop();
console.log(numeros2); // [1, 2, 3]
numeros2.unshift(0);
console.log(numeros2); // [0, 1, 2, 3]
numeros2.shift();
console.log(numeros2); // [1, 2, 3]

//  Buscar Elementos (indexOf, includes, find)
let letras = ["a", "b", "c", "d"];
console.log(letras.indexOf("c")); // Salida: 2
console.log(letras.includes("e")); // Salida: false
let encontrado = [10, 20, 30, 40].find(num => num > 25);
console.log(encontrado); // Salida: 30

//  Filtrar y Mapear Datos
let edades = [18, 22, 15, 30, 16, 25];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 22, 30, 25]
let doble = edades.map(edad => edad * 2);
console.log(doble); // [36, 44, 30, 60, 32, 50]

//  Ordenar y Revertir Arreglos
let numeros3 = [3, 1, 4, 1, 5, 9, 2, 6];
numeros3.sort((a, b) => a - b);
console.log(numeros3); // [1, 1, 2, 3, 4, 5, 6, 9]
numeros3.reverse();
console.log(numeros3); // [9, 6, 5, 4, 3, 2, 1, 1]

/*
     Conclusión
    Los arreglos en JavaScript permiten almacenar y manipular colecciones de datos de manera eficiente.
    Conocer sus métodos y cómo funcionan facilita la escritura de código más limpio y optimizado.
*/







/**
 * Programación Orientada a Objetos en JavaScript
 * --------------------------------------------
 * La Programación Orientada a Objetos (POO) es un paradigma de programación basado en la idea de "objetos"
 * que pueden contener datos (atributos) y métodos (funciones que operan sobre estos datos).
 *
 * Principales conceptos de la POO en JavaScript:
 * 1. Clases: Plantilla para crear objetos.
 * 2. Objetos: Instancia de una clase.
 * 3. Propiedades y Métodos: Datos y funciones dentro de una clase.
 * 4. Encapsulación: Restricción del acceso a ciertos datos.
 * 5. Herencia: Capacidad de una clase de heredar propiedades y métodos de otra.
 * 6. Polimorfismo: Permite modificar métodos heredados para comportamientos diferentes.
 */

// Ejemplo 1: Creación de una clase y objeto
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const persona1 = new Persona("Carlos", 30);
console.log(persona1.saludar()); // Hola, mi nombre es Carlos y tengo 30 años.

// Ejemplo 2: Herencia
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    estudiar() {
        return `${this.nombre} está estudiando ${this.curso}.`;
    }
}

const estudiante1 = new Estudiante("Ana", 20, "JavaScript");
console.log(estudiante1.saludar()); // Hereda el método de Persona
console.log(estudiante1.estudiar());

// Ejemplo 3: Encapsulación con setters y getters
class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this._saldo = nuevoSaldo;
        } else {
            console.log("No puedes tener saldo negativo.");
        }
    }
}

const cuenta = new CuentaBancaria(500);
console.log(cuenta.saldo);
cuenta.saldo = 1000;
console.log(cuenta.saldo);
cuenta.saldo = -50; // No permite saldo negativo






/* =============================
   MANEJO DE EVENTOS Y EL DOM
   =============================

El DOM (Document Object Model) es una representación en forma de árbol de los elementos de una página web.
Nos permite manipular la estructura, estilo y contenido de un documento HTML mediante JavaScript.

Los eventos son acciones que ocurren en la página web, como hacer clic en un botón, mover el mouse o presionar una tecla.
Con JavaScript podemos capturar y responder a estos eventos.
*/

// 1. Captura de eventos mediante addEventListener
const boton = document.getElementById("miBoton");
boton.addEventListener("click", function () {
    alert("¡Has hecho clic en el botón!");
});

/*
Ejemplo 1: Captura de eventos con addEventListener.
Cuando el usuario hace clic en el botón con id "miBoton", se muestra una alerta.
*/

// 2. Manipulación del DOM - Modificación de contenido
document.getElementById("miTexto").textContent = "Nuevo texto dinámico";

/*
Ejemplo 2: Modificar el contenido de un elemento con id "miTexto" usando textContent.
*/

// 3. Cambiar estilos dinámicamente
document.getElementById("miCaja").style.backgroundColor = "blue";

/*
Ejemplo 3: Cambiar el color de fondo de un elemento con id "miCaja" dinámicamente.
*/






/**
 * MÓDULOS EN JAVASCRIPT
 * ----------------------
 * Los módulos en JavaScript permiten dividir el código en archivos reutilizables.
 * Se pueden exportar funciones, clases o variables desde un archivo y luego importarlas en otro.
 */

// Ejemplo 1: Exportar e importar una función en módulos
// Archivo: mathOperations.js
 export function sumar(a, b) {
    return a + b;
}
 export function restar(a, b) {
    return a - b;
}

// Archivo: main.js
// import { sumar, restar } from './mathOperations.js';
// console.log(sumar(5, 3)); // 8
// console.log(restar(5, 3)); // 2

// Ejemplo 2: Exportar una clase en módulos
// Archivo: Persona.js
 export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

// Archivo: main.js
// import { Persona } from './Persona.js';
// const persona = new Persona("Luis", 25);
// console.log(persona.saludar());

// Ejemplo 3: Exportación por defecto
// Archivo: saludo.js
 export default function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Archivo: main.js
// import saludar from './saludo.js';
// console.log(saludar("María"));




/* =============================
   PROGRAMACIÓN ASÍNCRONA
   =============================

La programación asíncrona en JavaScript permite ejecutar operaciones sin bloquear la ejecución del código.
Esto es útil para manejar operaciones como solicitudes a servidores, temporizadores y manejo de eventos.
*/

// 1. Uso de setTimeout para ejecutar código después de un tiempo específico
setTimeout(() => {
    console.log("Este mensaje aparece después de 3 segundos");
}, 3000);

/*
Ejemplo 1: setTimeout ejecuta una función después de 3 segundos.
*/

// 2. Uso de Promesas para manejar operaciones asincrónicas
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos cargados correctamente");
    }, 2000);
});

miPromesa.then(mensaje => console.log(mensaje));

/*
Ejemplo 2: Creación y uso de una promesa que se resuelve después de 2 segundos.
*/

// 3. Uso de async/await para escribir código asincrónico de manera más legible
async function obtenerDatos() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const datos = await respuesta.json();
    console.log(datos);
}
obtenerDatos();

/*
Ejemplo 3: Uso de async/await para obtener datos de una API y mostrarlos en la consola.
*/
