export default function validarIniciarSesion(valores) {
    
    let errores = {};

    if(!valores.entrega) {
        errores.entrega = "La fecha de entrega es obligatio";
    } 
    if(!valores.monto) {
        errores.monto = "La fecha de entrega es obligatio";
    }
    if(!valores.cuotas) {
        errores.cuotas = "La fecha de entrega es obligatio";
    }
    if(!valores.tipoTasa) {
        errores.tipoTasa = "La fecha de entrega es obligatio";
    }
    if(!valores.tasaInteres) {
        errores.tasaInteres = "La fecha de entrega es obligatio";
    }
    if(!valores.periodoPagos) {
        errores.periodoPagos = "La fecha de entrega es obligatio";
    }

    return errores;
}