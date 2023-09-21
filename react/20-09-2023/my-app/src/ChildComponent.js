import React from 'react';

function ChildComponent(props){
    return (
        <div>
            <h2>
                valor en el componente hijo: {props.valor}
            </h2>
            <button onClick={props.onIncrement}>
                oprima aqui
            </button>
        </div>
    );
}

export default ChildComponent;