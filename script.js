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
