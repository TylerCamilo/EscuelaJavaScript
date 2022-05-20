function calcularMediaAritmetica  (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
    }
function esPar(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;
        }
    }
function ordenarNumeros(a,b){
    return a- b;
}
function calcularMediana(lista){
    
    const listaOrdenada = lista.sort(ordenarNumeros);
    const mitadLista = parseInt(listaOrdenada.length/2);

    let mediana;

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;

        }else{
            mediana = lista[mitadLista];
        }
    return mediana;
}