// HELPERS
function calcularSalarioDiario(salario) {
    const salarioxDia = salario/ 30;
    return salarioxDia;
  }

  function calcularRecargoFestivoDiurno(salarioxDia,horas){
      const recargoFesDiu = (salarioxDia/8)* 0.75;
      const recargoPagar = recargoFesDiu * horas;
      return recargoPagar;

  }
  function calcularRecargoNocturno(salarioxDia,horas){
    const recargoNoc = (salarioxDia/8)* 0.35;
    const recargoNoctPagar = recargoNoc * horas;
    return recargoNoctPagar
  }

  function calcularRecargoNocturnoFestivo(salarioxDia,horas){
    const recargoNocFest = (salarioxDia/8) * 2.1;
    const recargoNocFestSub = recargoNocFest * horas;
    return recargoNocFestSub
  }


///CODIGO IDEA DE NEGOGIO
  
function onClickButtonSalaryCompute() {

    /// TRAYENDO VALOR DE RODAMIENTO
    const inputRodamiento = document.getElementById("InputRodamiento");
    const rodamiento1 = inputRodamiento.value;
    const rodamiento = document.getElementById("rodamiento");
    rodamiento.innerText = "Su rodamiento diario es: $" + rodamiento1;

    //CALCULO DE SALARIO POR DIA
    const inputPrice = document.getElementById("InputSalary");
    const priceValue = inputPrice.value;
    const salarioxDia = calcularSalarioDiario(priceValue);
    const salarioxDiaApr = salarioxDia.toFixed(2);
    const salarioDiario = document.getElementById("salarioDiario");
    salarioDiario.innerText = "Su salario diario es: $" + salarioxDiaApr;

     // CALCULO SALARIO QUINCENAL

     const salarioQuince = priceValue/2;
     const salarioQuincenal = document.getElementById ("salarioQuincenal");
     const salarioQuincenalApr = salarioQuince.toFixed(2)
     salarioQuincenal.innerText = "Su salario quincenal es: $" + salarioQuincenalApr;


    //CALCULO DE PAGO RECARGO FESTIVO DIURNO
    const cantidadHorasFD = document.getElementById("InputRecargoFestivo");
    const totalHorasFD = cantidadHorasFD.value;
    const horasTotal = calcularRecargoFestivoDiurno(salarioxDia,totalHorasFD);
    const recargoFestivoDiurnoApr = horasTotal.toFixed(2);
    const recargoFestivoDiurno = document.getElementById("recargoFestivoDiurno");
    recargoFestivoDiurno.innerText = "Su recargo Festivo Diurno es de: $" + recargoFestivoDiurnoApr;


    //CALCULO DE PAGO RECARGO NOCTURNO ORDINARIO
    const cantidadHorasNO = document.getElementById("InputRecargoNocturno");
    const cantidadHorasNocOrd = cantidadHorasNO.value;
    const costoHorasN = calcularRecargoNocturno(salarioxDia,cantidadHorasNocOrd);
    const recargoNocturno = document.getElementById("recargoNocturno");
    const recargoNocturnoAprox = costoHorasN.toFixed(2);
    recargoNocturno.innerText  = "Su recargo nocturno ordinario es de: $" + recargoNocturnoAprox;


    // CALCULO DE RECARGO NOCTURNO FESTIVO
    const cantidadHorasNocFest = document.getElementById("InputRecargoNocturnoFestivo");
    const cantidadHorasNF = cantidadHorasNocFest.value;
    const costoHorasNocFes = calcularRecargoNocturnoFestivo(salarioxDia,cantidadHorasNF);
    const recargoNocFestAprox = costoHorasNocFes.toFixed(2);
    const recargoNocFest = document.getElementById("recargoNocFest");
    recargoNocFest.innerText = "Su recargo nocturno festivo es de: $" + recargoNocFestAprox;

    // CALCULO DE DEDUCCIONES DE LEY  Y TOTAL A PAHAR

    const totalToPay = Number(salarioQuincenalApr) +  Number(recargoFestivoDiurnoApr) + Number(recargoNocturnoAprox)
                      + Number(recargoNocFestAprox) + Number(rodamiento1);
    const totalPagar = document.getElementById("totalPagar");
    totalPagar.innerText = "Su salario es: $" + Number(totalToPay);

    const totalRetiro = Number(totalToPay) - (Number(totalToPay)*0.08);
    const totalRetirarAprox = totalRetiro.toFixed(2)
    const totalRetirar = document.getElementById("totalRetirar");
    totalRetirar.innerText = "Dinero a retirar $"+ Number(totalRetirarAprox);
    

  }
  

