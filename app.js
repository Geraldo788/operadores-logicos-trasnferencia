// 1. Acceso a un sistema

let ingresoUsuario = prompt("Ingrese Usuario:");
let ingresoPass = prompt("Ingrese Contraseña:"); 

let usuario = "admin";
let pass = "1234";

if ((usuario === ingresoUsuario) && (pass === ingresoPass)) {
    alert("Acceso Correcto");
} else {
    alert("Acceso Denegado");
}

// Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan
// ambas condiciones?

// R: El operador que a mi parecer es el mas correcto es && 
// porque los datos de ingreso del usuario deben coincidir, al igual que la contraseña, 
// lo que quiere decir que ambos valores deben ser ciertos.