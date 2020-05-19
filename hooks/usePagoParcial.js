import {useState, useEffect} from 'react';

const usePagoParcial =()=> {
    const [cuotaParcial, setCuotaParcial] = useState(0);

    useEffect(() => {
        console.log(cuotaParcial);
        
    },[cuotaParcial]);
    return{
        setCuotaParcial,
        cuotaParcial
    }
}

export default usePagoParcial;