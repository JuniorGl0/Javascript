// Ejercicio: Verificación de edad para ingresar a un sitio
// Escribe un programa que solicite al usuario ingresar su edad y verifique si cumple con los requisitos para ingresar.

function obtenerValor(mensaje) {
    let input = prompt(mensaje);
    return input;
  }
  
  // Obtener la edad
  let edad = obtenerValor("Ingresa tu edad:");
  
  // Verificar la edad 
  if (esMayorDeEdad(edad)) {
    alert("Puedes ingresar al sitio. ¡Bienvenido!");
  } else {
    alert("Lo siento, no cumples con los requisitos de edad para ingresar al sitio.");
  }
  
  // Función que verifica si una persona es mayor.
  function esMayorDeEdad(edad) {
    return edad >= 18;
  }
  