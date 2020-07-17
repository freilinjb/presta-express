export default function validarCrearCliente(valores) {
  let errores = {};

  //validar el nombrer de usuario
  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  if (!valores.apellido) {
    errores.apellido = "El Apellido es Obligatorio";
  }
  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.correo) &&
    valores.correo.trim() !== ""
  ) {
    errores.correo = "Email no valido";
  }

  //validar el password
  if (!valores.telefono) {
    errores.telefono = "El Numero de Telefono es Obligatorio";
  }

  return errores;
}
