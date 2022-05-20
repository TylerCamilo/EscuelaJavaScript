//helper / Utils

// funcion de calcular media aritmetica
function calcularMediaAritmetica  (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado  = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
    }

//verificar par o impar
function esPar(numero){
    return(numero%2 === 0);
    }

//Calculadora de mediana Salarios
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2); 
        if(esPar(lista.length)){
            const personaMitad1 = lista[mitad-1];
            const personaMitad2 = lista[mitad];
            const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2])
            return mediana;   
        }else{
            const personaMitad = lista[mitad];
            return personaMitad;
        }
    }    

//LOGICA DE NEGOCIO

// creacion de array donde traemos del obejto unicamente
// los salarios de cada un a de las personas
const salariosCol = colombia.map( // map nos permite recorrer colombia
    function(persona){
        return persona.salary;
    }
);

const salariosColOrden = salariosCol.sort(
    function (salaryA,salaryB){
        return salaryA  - salaryB;
    }
);
const medianaGeneralCol = medianaSalarios(salariosColOrden);

// Calculo del top 10% de Mayores salarios

const spliceStart = (salariosColOrden.length * 90) / 100;
const spliceCount = salariosColOrden.length - spliceStart;


const salariosColTop10 = salariosColOrden.splice(
    spliceStart,
    spliceCount,
    );

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol, medianaTop10Col,
});