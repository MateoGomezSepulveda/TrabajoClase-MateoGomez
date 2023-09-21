import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(){
    const {valor, setValor}  = useState(0);

    const handleIncrement = () =>{
        setValor(valor + 1);
    };

    return(
        <div>
            <h1>
                Este es el valor del Padre: {valor}
            </h1>
            <ChildComponent valor = {valor} onIncrement={handleIncrement}/>
        </div>
    );
}

export default ParentComponent;