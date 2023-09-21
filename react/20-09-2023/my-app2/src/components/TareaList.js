function TareaList(props) {
    return(
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {props.tareas.map((tarea) =>(
                    <li key={tarea.id}>
                        {tarea.title} - Estado: {tarea.state}
                        <button onClick={() => props.onEdit(tarea.id)}>Editar</button>
                        <button onClick={() => props.onDelete(tarea.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TareaList;