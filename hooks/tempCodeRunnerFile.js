const transformarFechaYMD=(fecha)=> {
    const ftemp = fecha.split('-');
    const f = {
        dia:'',
        mes:'',
        anio:''
    }
    f.anio = ftemp[2];
    f.mes = ftemp[1];
    f.dia = ftemp[0];
  
    return f.anio+'-'+f.mes+'-'+f.dia;
  }

  function formatearFecha(fecha = new Date(), formato = 'dmy') {
    //Formatear la fecha
    let dd = fecha.getDate();

    let mm = fecha.getMonth()+1; 
    const yyyy = fecha.getFullYear();
    if(dd<10) 
    {
        dd=`0${dd}`;
    } 

    if(mm<10) 
    {
        mm=`0${mm}`;
    } 
    if(formato === 'dmy') {
      fecha = `${dd}-${mm}-${yyyy}`;
    } else if (formato === 'ymd'){
      fecha = `${yyyy}-${mm}-${dd}`;
    } else if(formato === 'mdy') {
      fecha = `${mm}-${dd}-${yyyy}`;
    }
    // fecha = `${mm}-${dd}-${yyyy}`;
    // console.log(fecha);
    // fecha = `${mm}/${dd}/${yyyy}`;
    // console.log(fecha);
   //  fecha = `${dd}-${mm}-${yyyy}`;

    return fecha;
 }
  
  const compararFechas=(fecha2,comodin = true)=> {
    let fecha1 = new Date().now;
    fecha1 = transformarFechaYMD(formatearFecha(fecha1));
  
    fecha2 = transformarFechaYMD(fecha2);
  
    if(comodin) {
        return new Date(fecha2) < new Date(fecha1);
    } else {
        return new Date(fecha2) <= new Date(fecha1);
    }
  }

  console.log(compararFechas('16-07-2020',false));

  var date1 = '25/02/1985';  /*february 25th*/
var date2 = '26/02/1985';  /*february 26th*/

if (date.parseDate('dd/mm/yy', date2) > $.datepicker.parseDate('dd/mm/yy', date1)) {

          console.log(date2 + 'is later than ' + date1);

}