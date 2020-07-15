export default function validarCrearGarantiaHipoteca(valores) {
    
    let errores = {};

    // validar el nombrer de usuario
    if(!valores.tipoPropiedad) {
        errores.tipoPropiedad = "El Chasis es obligatorio";
    }  

    if(!valores.certificado) {
        errores.certificado = "El Nombre es obligatorio";
    } 

    if(!valores.parcela) {
        errores.parcela = "El Nombre es obligatorio";
    } 

    if(!valores.metraje) {
        errores.tipoVehiculo = "El Nombre es obligatorio";
    } 
    
    if(!valores.frenteMts) {
        errores.frenteMts = "El Nombre es obligatorio";
    } 

    if(!valores.libro) {
        errores.libro = "El Apellido es Obligatorio";
    } 

    if(!valores.folio) {
        errores.folio = "El Apellido es Obligatorio";
    } 

    if(!valores.distritoCatastral) {
        errores.distritoCatastral = "El numero de pasajeros es Obligatorio";
    } 

    if(!valores.tasacionHipoteca) {
        errores.tasacionHipoteca = "El Numero de puertas es Obligatorio";
    } 

    if(!valores.fontoMts) {
        errores.fontoMts = "La tasacion es Obligatorio";
    } 

    //TODO Validar los datos del Propietario
    if(!valores.direccionHipoteca) {
        errores.direccionHipoteca = "El Numero de nombre es Obligatorio";
    } 

    if(!valores.ciudad) {
        errores.ciudad = "El Numero de Telefono es Obligatorio";
    }     

    if(!valores.direccionHipoteca) {
        errores.direccionHipoteca = "La direccion es un campo obligatorio";
    }

    return errores;
}