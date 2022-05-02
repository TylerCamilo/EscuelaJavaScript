var piedra = 1;
var tijera = 2;
var papel = 3;

var miOpcion = 1;
var maquina = Math.floor((Math.random() * 3) + 1);


function juego(miOpcion){

switch (true){
    case (miOpcion === maquina):
        console.log("empate");
        break; /*Sale de la funcion swicth*/
    case (miOpcion === 1 && maquina === 2 || miOpcion === 2 && maquina === 3 || miOpcion === 3 && maquina === 1) :
        console.log("ganaste");
        break;
    case (miOpcion === 1 && maquina === 3|| miOpcion === 2 && maquina === 1 || miOpcion === 3 && maquina === 2):
        console.log("Perdiste");
        break;
    default:
        console.log("No se que rayos pasó")
}
}
juego(miOpcion)