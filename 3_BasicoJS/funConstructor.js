function auto (marca,modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = ano;
  }
  
  var autos = []; /*Se crea el array donde ubicamos las caracteristicas */
  var cantidad = prompt("Cuantos autos desea ingresar?") /*preguntamos la cantidad de autos a ingresar*/
  
  for(var i = 0 ; i < cantidad ; i++){ /*Para cada iteracion menor a la cantidad deautos a ingresa en un intervalo uno a uno*/
    var marca = prompt("¿Cual es la marca del automovil?");
    var modelo = prompt("Cual es el modelo del automovil");
    var annio = prompt("Cual es el año del automovil");
    autos.push(new auto (marca, modelo, annio)); /*se hace un push agregando a la ultima posicion del array autos las caracterica, a su vez usa el metodo new para agregarlo al obejto auto*/
  }
  
  for(var i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }