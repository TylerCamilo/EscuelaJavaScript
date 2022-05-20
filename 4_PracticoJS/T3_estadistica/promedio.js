
function calcularMediaAritmetica  (lista){
//let sumaLista = 0;

// for(let i = 0;i < lista.length; i++){
//     /*Creamos un terador; que haga el ciclo mientras i
//     sea menor a la cantidad de elemetos de un array; itenarod
//     de uno en uno*/
//     sumaLista = sumaLista + lista[i];
// }

//PROMEDIO USANDO EL METODO REDUCE DE LOS ARRAYS
const sumaLista = lista.reduce(
    function(valorAcumulado,nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista/lista.length;

return promedioLista;
}

//MEDIANA USANDO EL METODO ESPECIAL DE LOS ARRAYS

