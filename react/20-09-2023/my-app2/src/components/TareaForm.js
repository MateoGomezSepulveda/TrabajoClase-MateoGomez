import React, { useState } from 'react';

function TareaForm(props){
    const [nuevaTarea, colocarNewTarea] = useState({title: '', description: '', state: 'Creada'});

    const manejarInputChange = (e) => {
        const {name, value } = e.target;
        colocarNewTarea({ ...new})
    }
}