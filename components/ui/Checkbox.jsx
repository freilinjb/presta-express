import {useState} from 'react';

const Checkbox = ({initialState,id,onChange}) => {
    const [checked, setChecked] = useState(initialState);

    const onClick =(checked)=>{
        setChecked(checked);
        onChange(id, checked);
    }

    return ( <input type="checkbox" onClick={e => onClick(e.target.checked)} id={id} checked={checked}/> );
}
 
export default Checkbox;