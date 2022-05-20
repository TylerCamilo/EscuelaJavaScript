function calcularModa(list){
        const listCount ={};
        list.map(                           //map nos ayuda a recorrer el array
        function (element){                 // por cada elemeto del array
            if(listCount[element]){         // Validamos si el elemento está dentro del nuevo array
                listCount[element] += 1;    // Si está entonces lo sumamaos en el acumulado es decir si esta repetido no lo pone sino suma la cantidad
            }else{          
                listCount[element] = 1;     // Si en efecto no está entonces lo agrega
            }
        }
    );
        const listToArray = Object.entries(listCount).sort( // creamos una variable que almacena el array de array y lo entrega ordenado
            function (elementoA, elementoB){
                return elementoA[1] - elementoB[1];         // esta funcion nos ordena al array de array de mayo a menor comparacion el indice 1 de cada array que es 
                                                            // la cantidad qeu se repite cada numero del arrray y asi determinamos la moda
            }
        );

    return listToArray[listToArray.length - 1];
}