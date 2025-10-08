// 2. Calcular precio de entradas al cine

// ingreso de edad y confirmacion es o no, estudiante.
let edad = parseInt(prompt("Ingrese su edad:"))
let esEstudiante = prompt("¿es estudiante? (si/no):")

// variable declarada "Precio de entrada"
let precioEntrada;

// Se establece condición de precios segun edad.
if (edad < 12){
    precioEntrada = 5000;
} else if (edad >= 12 && edad <= 18){
    precioEntrada = 8000;
} else if (edad > 18){
    precioEntrada = 10000;
} else {
    alert("Edad no valida");
}

// Descuento del 20% si es estudiante.
if (esEstudiante === "si"){
    precioEntrada = precioEntrada * 0.2
}

// alerta en pantalla, Valor de entrada.
alert(`El valor de la entrada es: $ ${precioEntrada}`)

// Pregunta de análisis: ¿Qué estructura condicional usarías para resolver este caso: if-
// else if-else o switch? ¿Por qué?

// R: if-else, me parece que es la mas ideal para crear varias condicionales.