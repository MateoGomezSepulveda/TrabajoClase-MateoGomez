Trabajo En clase

ejercicio 21-09-2023

Un cliente require que se cree una aplicacion de tipo SPA en reactJs, la cual pueda gestionar la revision, modificacion, actualizacion y eliminacion de tareas.Dicha aplicacion podra tambien manejar diferentes estados de dicha tarea (Creada, En pausa,En curso y terminada)

import React, {Component} from 'react'
import TareaForm from './components/TareaForm';
import TareaList from './components/TareaList';

class App extends Component{
  constructor(){
    super();
    this.state = {
      tareas: [],
    };
  }
}

estando en app.js importamos React y las clases 'Component', asi como los componentes 'TareasList' y 'TareasForm' que hemos creado
creamos la clase App y luego en el constructor, inizializamos el estado de la aplicaion que es tareas y es una array que almacenara las tareas

  addTarea = (nuevaTarea) => {
    this.setState((prevState) =>({
      tareas: [...prevState.tareas, nuevaTarea],
    }));
  };

en esta parte definimos un metodo addTarea que se utiliza para agregar una nueva tarea al estado y toma la nuevaTarea como argumento y actualiza el estado agregandola al array tareas

  updateTarea = (tareaId, updatedTarea) => {
    this.setState((prevState) =>({
      tareas: prevState.tareas.map((tarea) =>
        tarea.id === tareaId ?  updatedTarea: tarea
      ),
    }));
  };

  en esta parte definimos un metodo updateTarea que se utiliza para actualizar una tarea ya existente y toma el id de la tarea y la tarea actuzalizada como argumentos luego busca la tarea correspondiente en el array tareas y la reemplaza con la tarea actualizada

    deleteTarea = (tareaId) => {
    this.setState((prevState) =>({
      tareas: prevState.tareas.filter((tarea) => tarea.id !== tareaId),
    }));
    };

en esta parte definimos un metodo deleteTareas que se utiliza para eliminar una tarea. toma el id de la tarea como argumento y filtra las tareas en el estado para excluir la tarea con el id proporcionado



