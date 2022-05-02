function calculadoraDescuento(precio, descuento){
    const porcentToPay = 100 - descuento;
    const precioPagar = (precio * porcentToPay)/100;
    return precioPagar
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; // del elemento anterior sacaremos el valor escrito por el usuario
    
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calculadoraDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $:" + precioConDescuento;
}