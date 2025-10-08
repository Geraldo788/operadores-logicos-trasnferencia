// 5. Sistema de calificaciones con condiciones lógicas

let nota = parseInt(prompt("Ingrese la nota final (0-100) :"));
let asistencia = parseInt(prompt("Ingrese el % de asistencia (0-100):"))

if (nota >= 60 && asistencia >= 80) {
alert("Aprobado")
} else {
    alert("Reprobado");
}