export default function validarCrearGarantiaSolidaria(valores) {
    
    let errores = {};

    // validar el nombrer de usuario
    if(!valores.tipoIdentificacionSolidaria) {
        errores.tipoIdentificacionSolidaria = "El Chasis es obligatorio";
    }  

    if(!valores.identificacionSolidaria) {
        errores.identificacionSolidaria = "El Nombre es obligatorio";
    } 

    if(!valores.nombreSolidaria) {
        errores.nombreSolidaria = "El Nombre es obligatorio";
    } 

    if(!valores.apellidoSolidaria) {
        errores.apellidoSolidaria = "El Nombre es obligatorio";
    } 
    
    if(!valores.sexoSolidaria) {
        errores.sexoSolidaria = "El Nombre es obligatorio";
    } 

    if(!valores.fechaNacimiento) {
        errores.fechaNacimiento = "El Apellido es Obligatorio";
    } 

    if(!valores.telefonoSolidaria) {
        errores.telefonoSolidaria = "El numero de pasajeros es Obligatorio";
    } 

    if(!valores.sectorSolidaria) {
        errores.sectorSolidaria = "El Numero de puertas es Obligatorio";
    } 

    if(!valores.ciudadSolidaria) {
        errores.ciudadSolidaria = "La tasacion es Obligatorio";
    } 

    //TODO Validar los datos del Propietario
    if(!valores.direccionSolidaria) {
        errores.direccionSolidaria = "El Numero de nombre es Obligatorio";
    } 

    return errores;
}