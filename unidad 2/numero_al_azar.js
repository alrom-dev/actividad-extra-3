// Variable para controlar si seguimos jugando
let jugarDeNuevo = "SI";

// Todo el juego está dentro de un ciclo while para poder repetir
while (jugarDeNuevo == "SI") {

    // 1. La computadora genera su número al azar (1 al 9)
    // Math.random() da un decimal, lo multiplicamos por 9 y sumamos 1
    let numeroCompu = Math.floor(Math.random() * 9) + 1;

    // 2. Pedimos el número al usuario y VALIDAMOS que esté entre 3 y 6
    let numeroUsuario = 0;
    
    // Usamos do-while para repetir la pregunta si se equivoca
    do {
        numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
        
        // Si el número no es válido, mostramos alerta (Validación)
        if (numeroUsuario < 3 || numeroUsuario > 6 || isNaN(numeroUsuario)) {
            alert("Error: Debes ingresar un número válido entre 3 y 6.");
        }
    } while (numeroUsuario < 3 || numeroUsuario > 6 || isNaN(numeroUsuario));

    // 3. Pedimos la predicción (MAYOR, MENOR o IGUAL)
    let prediccion = prompt("¿Crees que tu número (" + numeroUsuario + ") es MAYOR, MENOR o IGUAL al de la computadora?").toUpperCase();

    // 4. Determinamos la realidad (¿Fue mayor, menor o igual?)
    let resultadoReal = "";

    if (numeroUsuario > numeroCompu) {
        resultadoReal = "MAYOR";
    } else if (numeroUsuario < numeroCompu) {
        resultadoReal = "MENOR";
    } else {
        resultadoReal = "IGUAL";
    }
// 5. Comparamos si la predicción del usuario coincide con la realidad
    if (prediccion == resultadoReal) {
        alert("¡Ganaste! \nLa computadora eligió: " + numeroCompu + "\nTú elegiste: " + numeroUsuario + "\n¡Tu número sí era " + resultadoReal + "!");
    } else {
        alert("Perdiste. \nLa computadora eligió: " + numeroCompu + "\nTú elegiste: " + numeroUsuario + "\nEn realidad tu número era " + resultadoReal);
    }
 // 6. Preguntamos si quiere jugar otra vez
    jugarDeNuevo = prompt("¿Quieres jugar otra vez? (Escribe SI o NO)").toUpperCase();
}

// 7. Despedida 
alert("Juego terminado.\nAlumno: Joshua Romero \nCarnet: 17001354");