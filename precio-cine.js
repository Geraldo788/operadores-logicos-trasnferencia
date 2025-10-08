let edad = parseInt(prompt("Ingrese su edad:"))
let esEstudiante = prompt("¿es estudiante? (si/no):")

let precioEntrada;

if (edad < 12){
    precioEntrada = 5000;
} else if (edad >= 12 && edad <= 18){
    precioEntrada = 8000;
} else if (edad > 18){
    precioEntrada = 10000;
} else {
    alert("Edad no valida");
}

if (esEstudiante === "si"){
    precioEntrada = precioEntrada * 0.2
}

alert(`El valor de la entrada es: $ ${precioEntrada}`)