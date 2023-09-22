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

  addTarea = (nuevaTarea) => {
    this.setState((prevState) =>({
      tareas: [...prevState.tareas, nuevaTarea],
    }));
  };
  
  updateTarea = (tareaId, updatedTarea) => {
    this.setState((prevState) =>({
      tareas: prevState.tareas.map((tarea) =>
        tarea.id === tareaId ?  updatedTarea: tarea
      ),
    }));
  };
  
  deleteTarea = (tareaId) => {
    this.setState((prevState) =>({
      tareas: prevState.tareas.filter((tarea) => tarea.id !== tareaId),
    }));
  };
  
  render(){
    return(
      <div className='App'>
        <h1>Lista de Tareas</h1>
        <TareaForm addTarea={this.addTarea} />
        <TareaList
          tareas={this.state.tareas}
          updateTarea={this.updateTarea}
          deleteTarea={this.deleteTarea}
        />
      </div>
    );
  }
}

export default App;

