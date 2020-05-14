  const useCalculadora =() => {

  function setFecha(dia, periodo) {
    var fecha = new Date();

    switch (periodo) {
      case "diario":
        fecha.setDate(fecha.getDay() + dia);
        break;

      case "semanal":
        fecha.setDate(fecha.getDay() + dia * 7);
        break;

      case "quincenal":
        fecha.setDate(fecha.getDay() + 15 * dia);
        break;
      case "mensual":
        fecha.setDate(fecha.getMonth() + dia);
        break;
      case "bimestral":
        fecha.setDate(fecha.getMonth() + dia * 2);
        break;

      case "trimestral":
        fecha.setDate(fecha.getDay() + dia * 3);
        break;

      case "cuatrimestral":
        fecha.setDate(fecha.getDay() + dia * 4);
        break;

      case "semestral":
        fecha.setDate(fecha.getMonth() + dia * 6);
        break;
      case "anual":
        fecha.setDate(fecha.getFullYear() + dia);
        break;
    }

    return fecha;
  }

  // const useCalculadora = () => {
  //Periodo de pago
  const periodoPago = {
    DIARIO: "diario",
    SEMANAL: "semanal",
    QUINCENAL: "quincenal",
    MENSUAL: "mensual",
    BIMESTRAL: "bimestral",
    TRIMESTRAL: "trimestral",
    CUATRIMESTRAL: "cuatrimestral",
    SEMESTRAL: "semestral",
    ANUAL: "anual",
  };

  function getTasa(tasa, tasa_tipo, periodo) {
    if (tasa_tipo == periodoPago.ANUAL) {
      tasa = tasa / 12;
    }
    tasa = tasa / 100.0;
    if (periodo == periodoPago.DIARIO) {
      tasa = tasa / 30.4167;
    }
    if (periodo == periodoPago.SEMANAL) {
      tasa = tasa / 4.34524;
    }
    if (periodo == periodoPago.QUINCENAL) {
      tasa = tasa / 2;
    }
    if (periodo == periodoPago.MENSUAL) {
    }
    if (periodo == periodoPago.BIMESTRAL) {
      tasa = tasa * 2;
    }
    if (periodo == periodoPago.TRIMESTRAL) {
      tasa = tasa * 3;
    }
    if (periodo == periodoPago.CUATRIMESTRAL) {
      tasa = tasa * 4;
    }
    if (periodo == periodoPago.SEMESTRAL) {
      tasa = tasa * 6;
    }
    if (periodo == periodoPago.ANUAL) {
      tasa = tasa * 12;
    }
    return tasa;
  }

  function getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo) {
    let valor;

    tasa = getTasa(tasa, tasa_tipo, periodo);
    valor = monto * ((tasa * Math.pow(1 + tasa, cuotas)) / (Math.pow(1 + tasa, cuotas) - 1));
    return valor.toFixed(2);
  }

  function getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo) {
    let valor_de_cuota = getValorDeCuotaFija(
      monto,
      tasa,
      cuotas,
      periodo,
      tasa_tipo
    );
    var saldo_al_capital = monto;
    var items = new Array();
    var interes;
    var abono_al_capital;
    var numero;

    for (let i = 0; i < cuotas; i++) {
      interes = saldo_al_capital * getTasa(tasa, tasa_tipo, periodo);
      abono_al_capital = valor_de_cuota - interes;
      saldo_al_capital -= abono_al_capital;
      numero = i + 1;

      interes = interes.toFixed(2);
      abono_al_capital = abono_al_capital.toFixed(2);
      saldo_al_capital = saldo_al_capital.toFixed(2);



      var item = [
        numero,
        interes,
        abono_al_capital,
        valor_de_cuota,
        saldo_al_capital,
        setFecha(i, periodo),
      ];
      items.push(item);
    }
    return items;
  }

  function setMoneda(num) {
    let sign;
    let cents;

    num = num.toString().replace(/\$|\,/g, "");
    if (isNaN(num)) num = "0";
    sign = num == (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      num =
        num.substring(0, num.length - (4 * i + 3)) +
        "," +
        num.substring(num.length - (4 * i + 3));
    return (sign ? "" : "-") + "$" + num + (cents == "00" ? "" : "." + cents);
  }

  function calcular(monto, cuotas, tasa, periodo, tasa_tipo) {

    let detalleCuota = {
      cuotaFija: "",
      dato: [],
      msg: "",
    };
    let columna = [];

    const cuotafija = getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo);
    if (!monto) {
      alert("Indique el monto");
      return;
    }
    if (!cuotas) {
      alert("Indique las cuotas");
      return;
    }
    if (!tasa) {
      alert("Indique la tasa");
      return;
    }
    if (parseInt(cuotas) < 1) {
      alert("Las cuotas deben ser de 1 en adelante");
      return;
    }
    var items = getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo);

    if (parseInt(cuotas) > 3000) {
      alert(
        "Ha indicado una cantidad excesiva de cuotas, porfavor reduzcala a menos de 3000"
      );
      return;
    }

    let item;
    let value;
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      for (var e = 0; e < item.length; e++) {
        value = item[e];
        if (e > 0) {
          // value = setMoneda(value);
          value = value;
        }
        columna.push(value);
      }
      
      detalleCuota.dato.push({cuota: i, interes: cuotafija, abonoCapital: columna[1],valorCuota:  columna[2],saldoCapital: columna[3],saldoCapital: columna[4], fecha: setFecha(i, periodo)});
    }
    // columna.push(items);
    columna = [];

    let valor = setMoneda(items[0][3]);
    detalleCuota.cuotaFija = valor;
    var msg = "";
    if (periodo == "diario") {
      detalleCuota.msg =
        "Usted estará pagando " +
        valor +
        ", todos los dias durante " +
        items.length +
        " dias.";
    }
    if (periodo == "semanal") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", semanalmente durante " +
        items.length +
        " semanas.";
    }
    if (periodo == "mensual") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", mensualmente durante " +
        items.length +
        " meses.";
    }
    if (periodo == "quincenal") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", de manera quincenal por un periodo de " +
        items.length +
        " quincenas.";
    }
    if (periodo == "bimestral") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", cada 2 meses durante un periodo de " +
        items.length +
        " bimestres.";
    }
    if (periodo == "trimestral") {
      detalleCuota.msg =
        "Usted va a pagar " +
        valor +
        ", cada 3 meses durante " +
        items.length +
        " trimestres.";
    }
    if (periodo == "cuatrimestral") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", cada cuatrimestre (4 meses) por un periodo de " +
        items.length +
        " cuatrimestres.";
    }
    if (periodo == "semestral") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", cada 6 meses durante " +
        items.length +
        " semestres";
    }
    if (periodo == "anual") {
      detalleCuota.msg =
        "Usted pagará " +
        valor +
        ", anualmente por un periodo de " +
        items.length +
        " años";
    }
    return detalleCuota;
  }

  // console.log("calcular");

  // calcular(3000, 10, 6, "diario", "mensual");
  // console.log(detalleCuota.dato);

  return{
    // columna,
    calcular
    // detalleCuota
  }

};

export default useCalculadora;