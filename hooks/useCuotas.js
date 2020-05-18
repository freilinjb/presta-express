import { useState, useEffect } from 'react';

const useCuotas = () => {

    const [cuotasSeleccionadas, setCultasSeleccionadas] = useState([]); 
    const [valorCuotas, setValorCuotas] = useState(0);
    const resultado = [];
    // useEffect(() => {
    //     console.log('valor cuota: ','=>', valorCuotas);
    //     console.log('resultado Seleccionadas: ','=>', resultado);
        
    // },[resultado,valorCuotas]);
    return {
        setCultasSeleccionadas,
        setValorCuotas,
        cuotasSeleccionadas,
        valorCuotas,
        resultado
    }
}

export default useCuotas;