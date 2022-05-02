    function isoseles(lado1,lado2,lado3){
        if (lado1 == lado2){
            altura = Math.sqrt((lado3/2)*(lado3/2)-(lado1*lado1));
            if(lado3/2 > lado1){
                console.log("lado 1 y lado 2 iguales, es isóceles");
                return alert("La altura es: " + altura)
            }
            else{
                alert("La hipotenusa debe ser mas grande que el lado");
            }              
        }
        else if ( lado1 == lado3){
            console.log("Lado 1 y lado 3 iguales, es isóceles");
            if (lado2/2 > lado1){
                altura = Math.sqrt((lado2/2)*(lado2/2)-(lado1*lado1));
                return alert("La altura es: " + altura)
            }
            else{
                alert("La hipotenusa debe ser mas grande que el lado");
            }       
        }
        else if (lado2==lado3){
            console.log("lado 2 y lado3 iguales, es isóceles");
            if (lado1/2 > lado2){
                altura = Math.sqrt((lado1/2)*(lado1/2)-(lado2*lado2));
                return alert("La altura es:" + altura)
            }
            else{
                alert("La hipotenusa debe ser mas grande que el lado");
            }
        }
        else{
            alert("No es un triangulos isócees, no tiene lados iguales")
        }
    }
    isoseles(2,3,4)