import React from 'react';
import Tarea from './Tarea';

const TareaList = ({ tareas, updateTarea, deleteTarea}) =>{
    return(
        <div>
            {tareas.map((tarea) =>(
                <Tarea
                    key={tareas.id}
                    tarea={tarea}
                    updateTarea={updateTarea}
                    deleteTarea={deleteTarea}
                />
            ))}
        </div>
    );
};

export default TareaList;