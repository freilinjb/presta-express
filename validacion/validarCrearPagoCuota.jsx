export default function validarCrearCliente(valores) {
    
    let errores = {};

    //validar el nombrer de usuario
    if(!valores.formaPago) {
        errores.formaPago = "Debe seleccionar una forma de pago!!";
    }

    return errores;
}