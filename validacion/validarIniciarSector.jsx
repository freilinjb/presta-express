export default function validarIniciarSector(valores) {
    
    let errores = {};

    if(!valores.nombre) {
        errores.nombre = "El nombre del Sector es Obligatorio";
    }

    return errores;
}