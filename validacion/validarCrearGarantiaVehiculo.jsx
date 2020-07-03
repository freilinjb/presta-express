export default function validarCrearGarantiaVehiculo(valores) {
    
    let errores = {};

    //validar el nombrer de usuario
    if(!valores.chasis) {
        errores.chasis = "El Chasis es obligatorio";
    }  

    if(!valores.placa) {
        errores.placa = "El Nombre es obligatorio";
    } 

    if(!valores.marca) {
        errores.marca = "El Nombre es obligatorio";
    } 

    if(!valores.tipoVehiculo) {
        errores.tipoVehiculo = "El Nombre es obligatorio";
    } 
    
    if(!valores.modelo) {
        errores.modelo = "El Nombre es obligatorio";
    } 

    if(!valores.anio) {
        errores.anio = "El Apellido es Obligatorio";
    } 

    if(!valores.color) {
        errores.color = "El Apellido es Obligatorio";
    } 

    if(!valores.pasajeros) {
        errores.pasajeros = "El Apellido es Obligatorio";
    } 

    if(!valores.numeroPuertas) {
        errores.numeroPuertas = "El Apellido es Obligatorio";
    } 

    if(!valores.tasacion) {
        errores.tasacion = "El Apellido es Obligatorio";
    } 

    //TODO Validar los datos del Propietario
    if(!valores.nombre) {
        errores.nombre = "El Numero de Telefono es Obligatorio";
    } 

    if(!valores.telefono) {
        errores.telefono = "El Numero de Telefono es Obligatorio";
    }     

    if(!valores.direccion) {
        errores.direccion = "El Numero de Telefono es Obligatorio";
    }

    if(!valores.observacionVehiculo) {
        errores.observacionVehiculo = "El Numero de Telefono es Obligatorio";
    }



    return errores;
}