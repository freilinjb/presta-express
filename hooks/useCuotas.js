import { useState } from 'react';

const useCuotas = () => {

    const [cuotasSeleccionadas, setCultasSeleccionadas] = useState([]); 
    const [valorCuotas, setValorCuotas] = useState(0);
    
    return {
        setCultasSeleccionadas,
        setValorCuotas,
        cuotasSeleccionadas,
        valorCuotas
    }
}

export default useCuotas;