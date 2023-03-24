let jugador1 = prompt("Jugador 1, por favor ingrese su nombre:");
let jugador2 = prompt("Jugador 2, por favor ingrese su nombre:");
let jugada1 = prompt(jugador1 + ", por favor seleccione piedra, papel o tijera:");
let jugada2 = prompt(jugador2 + ", por favor seleccione piedra, papel o tijera:");

let ganador;

switch (jugada1) {
    case "piedra":
        switch (jugada2) {
            case "piedra":
                ganador = "Empate";
                break;
            case "papel":
                ganador = jugador2;
                break;
            case "tijera":
                ganador = jugador1;
                break;
            default:
                ganador = "Entrada inválida. Por favor, seleccione piedra, papel o tijera.";
        }
        break;
    case "papel":
        switch (jugada2) {
            case "piedra":
                ganador = jugador1;
                break;
            case "papel":
                ganador = "Empate";
                break;
            case "tijera":
                ganador = jugador2;
                break;
            default:
                ganador = "Entrada inválida. Por favor, seleccione piedra, papel o tijera.";
        }
        break;
    case "tijera":
        switch (jugada2) {
            case "piedra":
                ganador = jugador2;
                break;
            case "papel":
                ganador = jugador1;
                break;
            case "tijera":
                ganador = "Empate";
                break;
            default:
                ganador = "Entrada inválida. Por favor, seleccione piedra, papel o tijera.";
        }
        break;
    default:
        ganador = "Entrada inválida. Por favor, seleccione piedra, papel o tijera.";
}

alert("Jugador 1: " + jugada1 + "\n" + "Jugador 2: " + jugada2 + "\n\n" + ganador + " gana!");

