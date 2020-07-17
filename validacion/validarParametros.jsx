export default function validarParametros(valores) {
  let errores = {};

  //validar el nombrer de usuario
  if (!valores.nombreEmpresa) {
    errores.nombreEmpresa = "El Nombre es obligatorio";
  }

  if (!valores.telefono1) {
    errores.telefono1 = "El Apellido es Obligatorio";
  }
//   if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.correo) &&
//     valores.correo.trim() == ""
//   ) {
//     errores.correo = "Email no valido";
//   }

  //validar el password
  if (!valores.correo) {
    errores.correo = "El Numero de Telefono es Obligatorio";
  }

  if (!valores.direccion) {
    errores.direccion = "El Numero de Telefono es Obligatorio";
  }

  if (!valores.ciudad) {
    errores.ciudad = "El Numero de Telefono es Obligatorio";
  }

  return errores;
}
