function calculadoraDescuento(precio, descuento){
    const porcentToPay = 100 - descuento;
    const precioPagar = (precio * porcentToPay)/100;
    return precioPagar
}
const cupones =["cupon uno", "cupon dos", "cupon tres"];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 
    // del elemento anterior sacaremos el valor escrito por el usuario
    
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    if (!cupones.includes(cuponValue)){
        alert("El cupon " + cuponValue + " no es valido, intente nuevamente");

    }else if (cuponValue === "cupon uno"){
        descuento = 10;
    }else if (cuponValue === "cupon dos"){
        descuento = 20;
    }else if (cuponValue === "cupon tres"){
        descuento = 30;
    }
    /*
    switch(cuponValue){

        case cupones[0]: //cupon 1
            descuento = 10;
        break;
        case cupones[1]: //cupon 2
            descuento = 20;
        break;
        case cupones[2]: // cupon 3
            descuento = 30;
        break

    }
   */

    const precioConDescuento = calculadoraDescuento(priceValue,descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento a pagar son: $" + precioConDescuento;
}