//write your code here

    const opcions = ["piedra", "papel", "tijera", "lagarto", "spock"];

    const player = prompt("Elige piedra, papel, tijera, lagarto, spock").toLowerCase();

    const numeroAleatorio = () => {
        const index = Math.floor(Math.random() * opcions.length)
        return opcions [index];
    }


    const opcionComputer = numeroAleatorio()



    // Reglas del juego
    const aJugar = (player, computer) => {


        if (player === computer) {
            console.log("Empate!!!")
        }
        else if (
            (player === "piedra" && (computer === "tijera" || computer === "lagarto")) ||
            (player === "papel" && (computer === "piedra" || computer === "spock")) ||
            (player === "tijera" && (computer === "papel" || computer === "lagarto")) ||
            (player === "lagarto" && (computer === "spock" || computer === "papel")) ||
            (player === "spock" && (computer === "tijera" || computer === "piedra"))
        ) {
            console.log("¡Ganaste!");
        } else {
            console.log("¡Perdiste!");
        }
    }

aJugar(player, opcionComputer)








