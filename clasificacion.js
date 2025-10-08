// 3. Clasificación de números

// Se solicita el ingreso de un numero entero
/*let numero = parseInt(prompt("Ingrese un Numero Entero:"))

// condicional 
if (numero > 0){
    alert(`Numero Positivo`);
} else if (numero < 0){
    alert(`Numero Negativo`);
} else {
    alert(`Cero`)
} */

/* Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el
número es par o impar? */

let numero = parseInt(prompt("Ingresa un número entero:"));

/* condicional anidada, % en js no es porcentaje, se usa para determinar el residuo, en esta caso
 se usa para determinar si el numero es par o impar, dividiendo entre 2*/
 
if (numero > 0) {
    if (numero % 2 === 0) {
        alert("Número positivo y par");
    } else {
        alert("Número positivo e impar");
    }
} else if (numero < 0) {
    if (numero % 2 === 0) {
        alert("Número negativo y par");
    } else {
        alert("Número negativo e impar");
    }
} else {
    alert("Cero (no es par ni impar)");
}