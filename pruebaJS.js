const comparar=(fecha1, fecha2)=> {
    return new Date(fecha1) > new Date(fecha2);
}

const transformarFechaYMD=(fecha)=> {
    const ftemp = fecha.split('-');
    const f = {
        dia:'',
        mes:'',
        anio:''
    }
    f.anio = ftemp[0];
    f.mes = ftemp[1];
    f.dia = ftemp[2];

    return f.anio+'-'+f.mes+'-'+f.dia;
}


console.log(comparar('2020-05-28','2020-05-27'));
console.log(formatearFecha('2020-05-28'));