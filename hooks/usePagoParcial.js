import {useState} from 'react';

const usePagoParcial =()=> {
    const [cuota, setCuota] = useState();
    return{
        setCuota
    }
}

export default usePagoParcial;