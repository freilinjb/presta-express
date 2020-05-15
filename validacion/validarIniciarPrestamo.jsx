export default function validarIniciarSesion(valores) {
    
    let errores = {};

    if(!(valores.entrega)) {
        errores.entrega = "Debe espesificar la fecha de entrega";
    } 
    if(!valores.monto) {
        errores.monto = "El monto es obligatio";
    }
    if(!valores.cuotas) {
        errores.cuotas = "Debe espesificar las cuotas";
    }
    if(!valores.tipoTasa) {
        errores.tipoTasa = "Debe espesificar el tipo de tasa";
    }
    if(!valores.tasaInteres) {
        errores.tasaInteres = "Debe espesificar la tasa de interes";
    }
    if(!valores.periodoPagos) {
        errores.periodoPagos = "Debe seleccionar el periodo de pago";
    }

    return errores;
}