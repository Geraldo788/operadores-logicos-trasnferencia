// 4. Menú de opciones

let menu = parseInt(prompt(`1. Consultar saldo
2. Retirar dinero
3. Depositar dinero
4. Salir 
Ingrese el numero de la opcion`))



switch (menu) {
    case 1:
        alert(`Consulta de saldo`)
        break;
    case 2:
        alert(`Retirar dinero`)
        break;
    case 3:
        alert(`Depositar dinero`)
        break;
    case 4:
        alert(`Salir`)
        break;
    default:
        alert(`Opcion invalida`)    
}

/*Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1
y 4? */

/* R: el default se programo para que al ingresar un numero fuera del rango, arroje como mensaje
"opcion invalida" */