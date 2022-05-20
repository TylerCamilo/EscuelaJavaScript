var frutas = ['Manzana', 'Pera', 'Maracuya', 'Cereza', 'Pitaya'];
console.log(frutas);
console.log(frutas.length); /*Nos regresa el numero de elementos*/
console.log(frutas[0]);
var masFrutas = frutas.push('uva');
var ultimo = frutas.pop('uva');
var nuevaLongitud = frutas.unshift('uvas'); /*Da prioridad y lo pone al inicio*/
var borrarFruta = frutas.shift('uvas');
var posicion = frutas.indexof('Maracuya')