import React,{useState, useEffect} from 'react';

const Validacion = (stateInicial,validar,fn) => {

    const [valores, setValores] = useState(stateInicial);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;
            
            if(noErrores) {
                fn();//Fn = Funcion que se ejecuta en el componente
            }
            setSubmitForm(false);//Cambia el valor para que no se siga ejecutando
        }
    },[errores]);
 
    //Funcion que se ejecuta conforme el usuario escriba algo
    const handleChange =e=> {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        });        
    }

    //Funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit =e=> {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true);
        console.log('enviando...');
        
    }

    //cuando se realiza unel evento de blur
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true);
    }
    //Retorna diferentes secciones
    return {    
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default Validacion;