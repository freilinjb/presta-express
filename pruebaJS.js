const comparar=(fecha1, fecha2)=> {
    return new Date(fecha1) > new Date(fecha2);
}

console.log(comparar('2020-05-28','2020-05-27'));