// import React, { useState } from "react";
let tbody = {
  td: [],
  textCell: "",
  div1: "",
  tr: [],
  div2: "",
  dato: [],
  msg:''
};

let columna = [];

let prestamo ={
  numero: [],
  interes:[],
  valorCuota:[],
  saldoCapital:[]
}

function setFecha(dia, periodo) {
  var fecha = new Date();

  switch (periodo) {
    case "diario":
      fecha.setDate(fecha.getDay() + dia);
      break;

    case "semanal":
      fecha.setDate(fecha.getDay() + (dia *7 ));
      break;

    case "quincenal":
      fecha.setDate(fecha.getDay() + (15*dia));
      break;
    case "mensual":
      fecha.setDate(fecha.getMonth() + dia);
      break;
    case "bimestral":
      fecha.setDate(fecha.getMonth() + (dia * 2));
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
  if (tasa_tipo == periodoPago.ANUAL) { tasa = tasa / 12 }
  tasa = tasa / 100.0
  if (periodo == periodoPago.DIARIO) { tasa = tasa / 30.4167 };
  if (periodo == periodoPago.SEMANAL) { tasa = tasa / 4.34524 };
  if (periodo == periodoPago.QUINCENAL) { tasa = tasa / 2 };
  if (periodo == periodoPago.MENSUAL) { };
  if (periodo == periodoPago.BIMESTRAL) { tasa = tasa * 2 };
  if (periodo == periodoPago.TRIMESTRAL) { tasa = tasa * 3 };
  if (periodo == periodoPago.CUATRIMESTRAL) { tasa = tasa * 4 };
  if (periodo == periodoPago.SEMESTRAL) { tasa = tasa * 6 };
  if (periodo == periodoPago.ANUAL) { tasa = tasa * 12 };
  return tasa;
}


function getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo) {
  tasa = getTasa(tasa, tasa_tipo, periodo);
  valor =
    monto *
    ((tasa * Math.pow(1 + tasa, cuotas)) / (Math.pow(1 + tasa, cuotas) - 1));
  return valor.toFixed(2);
}

function getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo) {
  var valor_de_cuota = getValorDeCuotaFija(
    monto,
    tasa,
    cuotas,
    periodo,
    tasa_tipo
  );
  var saldo_al_capital = monto;
  var items = new Array();

  for (i = 0; i < cuotas; i++) {
    interes = saldo_al_capital * getTasa(tasa, tasa_tipo, periodo);
    abono_al_capital = valor_de_cuota - interes;
    saldo_al_capital -= abono_al_capital;
    numero = i + 1;

    interes = interes.toFixed(2);
    abono_al_capital = abono_al_capital.toFixed(2);
    saldo_al_capital = saldo_al_capital.toFixed(2);

    item = [
      numero,
      interes,
      abono_al_capital,
      valor_de_cuota,
      saldo_al_capital,
    ];
    items.push(item);
  }
  return items;
}

function setMoneda(num) {
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
  // var select_periodo = document.getElementById("select_periodo");
  // periodo = select_periodo.options[select_periodo.selectedIndex].value;
  // var select_tasa_tipo = document.getElementById("select_tasa_tipo");
  // tasa_tipo = select_tasa_tipo.options[select_tasa_tipo.selectedIndex].value;
  var items = getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo);
  // var tbody = document.getElementById("tbody_1");
  // tbody.innerHTML = "";

  if (parseInt(cuotas) > 3000) {
    alert(
      "Ha indicado una cantidad excesiva de cuotas, porfavor reduzcala a menos de 3000"
    );
    return;
  }

  for (i = 0; i < items.length; i++) {
    item = items[i];
    // tr = document.createElement("tr");
    for (e = 0; e < item.length; e++) {
      value = item[e];
      if (e > 0) {
        value = setMoneda(value);
      }
      // tbody.td = document.createElement("td");
      tbody.textCell = value;
      tbody.td.push(tbody.textCell);
      columna.push(tbody.textCell);
      tbody.tr.push(tbody.td);

    }
    console.log(setFecha(i, periodo));
    tbody.td.push(setFecha(i, periodo));
    console.log('cada vez');
    prestamo.numero.push(i);
    prestamo.interes.push(columna[1]);
    prestamo.valorCuota.push(columna[2]);
    prestamo.saldoCapital.push(columna[3]);
    // tbody.dato.push(tbody.tr);
  }
  // tbody.div1 = document.getElementById("div-valor-cuota");

  valor = setMoneda(items[0][3]);
  tbody.div1 = valor;
  var msg = "";
  if (periodo == "diario") {
    tbody.msg =
      "Usted estará pagando " +
      valor +
      ", todos los dias durante " +
      items.length +
      " dias.";
  }
  if (periodo == "semanal") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", semanalmente durante " +
      items.length +
      " semanas.";
  }
  if (periodo == "mensual") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", mensualmente durante " +
      items.length +
      " meses.";
  }
  if (periodo == "quincenal") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", de manera quincenal por un periodo de " +
      items.length +
      " quincenas.";
  }
  if (periodo == "bimestral") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", cada 2 meses durante un periodo de " +
      items.length +
      " bimestres.";
  }
  if (periodo == "trimestral") {
    tbody.msg =
      "Usted va a pagar " +
      valor +
      ", cada 3 meses durante " +
      items.length +
      " trimestres.";
  }
  if (periodo == "cuatrimestral") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", cada cuatrimestre (4 meses) por un periodo de " +
      items.length +
      " cuatrimestres.";
  }
  if (periodo == "semestral") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", cada 6 meses durante " +
      items.length +
      " semestres";
  }
  if (periodo == "anual") {
    tbody.msg =
      "Usted pagará " +
      valor +
      ", anualmente por un periodo de " +
      items.length +
      " años";
  }
  // var div2 = document.getElementById("div-comentario");
  tbody.div2 = msg;
}

//   return {
//     periodoPago,
//   };
// // };
console.log("calcular");

calcular(3000, 10, 6, "quincenal", "mensual");
console.log(tbody.td);
console.log(tbody.div1);
console.log(tbody.div2);
console.log(tbody.textCell);
console.log(tbody.msg);
var fecha = new Date();


prestamo[0] = tbody.td[1]; 
console.log(prestamo);

console.log(fecha.getMonth() + 1);

// export default useCalculadora;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien
