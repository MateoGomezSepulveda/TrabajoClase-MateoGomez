import './App.css';

function App() {
  const [tareas, colocarTareas] = useState(tareasData);

  const [editarTarea, colocarEditarTarea] = useState(null);

  const manejarAddTareas = (nuevaTarea) =>{
    colocarTareas([...tareas, {...nuevaTarea, id: tareas.length + 1}]);
  };

  const manejarEditTareas = (tareasId, updatedTask) =>{

  };

  const manejarDeleteTreas = (tareasId) =>{

  };

  return(
    <div className="App">
      <h1>Aplicaion de Gestion de tareas</h1>
      <TareaForm onAdd={manejarAddTareas} />
      <TareaList tarea={tareas} onEdit={manejarEditTareas} onDelete={manejarDeleteTreas} />
    </div>
  )
}


export default App;
