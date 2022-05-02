// codigo del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


// codigo del triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo (base,altura){
    return (base * altura)/2;
}
console.groupEnd();

// codigo de circulo

console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}   

function areaCirculo(radio){
    return  (radio * radio) * Math.PI;
}
console.groupEnd();

// inteactuar con  HTML

function calcularPerimetroCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
    
function calcularCircuferenciaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = perimetroCirculo(value);
    alert(area);

}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);

}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo1");
    const value = input.value; 
    const input1 = document.getElementById("inputTriangulo2");
    const value1 = input1.value; 
    const input2 = document.getElementById("inputTrianguloBase");
    const value2 = input2.value; 
    lado1=Number(value);
    lado2=Number(value1);
    base=Number(value2);
    const area = perimetroTriangulo(lado1,lado2,base);
    console.log(value)
    alert(area);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputTrianguloBase");
    const value = input.value;
    const input1 = document.getElementById("inputTrianguloAltura");
    const value1 = input1.value;
    base1 = Number(value);
    altura1 = Number(value1);
    const area = areaTriangulo(base1,altura1);
    console.log(value)
    alert(area);
     

}