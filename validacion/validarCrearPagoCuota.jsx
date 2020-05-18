export default function validarCrearCliente(valores) {
    
    let errores = {};

    //validar el nombrer de usuario
    if(!valores.formaPago) {
        errores.formaPago = "El Nombre es obligatorio";
    }  

    if(!valores.Observacion) {
        errores.formaPago = "El Apellido es Obligatorio";
    }

    //validar el password
    if(!valores.formaPago) {
         errores.formaPago = "El Numero de Telefono es Obligatorio";
    } 

    return errores;
}