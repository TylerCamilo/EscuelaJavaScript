/*JUEGO DE PIEDRA PAPEL O TIJERA*/
var piedra = 1;
var tijera = 2;
var papel = 3;

var miOpcion = 1;
var maquina = Math.floor((Math.random() * 3) + 1);

function juego(miOpcion){
    if ( miOpcion === maquina){
            console.log("Tu escogiste" + miOpcion +" y la maquina" 
            + maquina + "  es un empate");
            mensaje = "empate"
        }
    else if (miOpcion === 1 && maquina === 2 || miOpcion === 2 && maquina === 3 || miOpcion === 3 && maquina === 1 ){
            console.log("Eres el mejor, ganaste");
            mensaje = "ganaste"
    }
    else if (miOpcion === 1 && maquina === 3|| miOpcion === 2 && maquina === 1 || miOpcion === 3 && maquina === 2){
            console.log("Acabas de perder :( ");
            mensaje = "perdiste"
    }

    return mensaje
    }

    juego(miOpcion)