//Los objetos literales en JavaScript, también conocidos como
// objetos literales JSON (JavaScript Object Notation), 
//son una forma de organizar y almacenar datos en forma de pares clave-valor.
// Estos objetos son una de las estructuras de datos más fundamentales en JavaScript
// y se utilizan ampliamente en el lenguaje.
//Un objeto literal se crea utilizando llaves {} y contiene cero o más pares clave-valor,
// donde la clave es una cadena (también llamada propiedad) seguida de : y luego 
//el valor asociado. Los pares clave-valor están separados por comas.
//Aquí hay un ejemplo de un objeto literal simple:

var persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Ejemploville"
  };

//En este ejemplo, persona es un objeto literal que contiene tres propiedades:
// nombre, edad y ciudad, y cada una de ellas tiene un valor asociado.

//Puedes acceder a los valores de las propiedades de un objeto literal de la siguiente manera:

console.log(persona.nombre); // Imprime "Juan"
console.log(persona.edad);   // Imprime 30
console.log(persona.ciudad); // Imprime "Ejemploville"

//Además de almacenar datos simples, los objetos literales en JavaScript pueden contener 
//valores de cualquier tipo, incluyendo números, cadenas, booleanos, 
//funciones e incluso otros objetos literales, lo que los hace muy versátiles para 
//representar estructuras de datos complejas y anidadas. 
//Los objetos literales también se utilizan en la notación JSON para intercambiar datos entre 
//aplicaciones web y servidores, ya que JavaScript Object Notation (JSON) se basa en la 
//sintaxis de objetos literales de JavaScript.