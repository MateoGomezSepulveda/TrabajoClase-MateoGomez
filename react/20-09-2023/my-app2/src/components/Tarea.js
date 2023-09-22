import React, { Component } from 'react';

class Tarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            updatedTitle: this.props.tarea.title,
            updatedDescription: this.props.tarea.description,
        };
    }

    manejarEditClick = () => {
        this.setState({ isEditing: true});
    };

    manejarCancelClick = () => {
        this.setState({ isEditing: false});
    };

    manejarSaveClick = () => {
        const {tarea, updateTarea } = this.props;
        const {updatedTitle, updatedDescription} = this.state;

        if(updatedTitle && updatedDescription){
            const updatedTarea = {...tarea, title: updatedTitle, description: updatedDescription};
            updateTarea(tarea.id, updatedTarea);
            this.setState({ isEditing: false});
        }
    };

    manejarDeleteClick = () => {
        const { tarea, deleteTarea } = this.props
        deleteTarea(tarea.id);
    }

    render(){
        const { isEditing, updatedTitle, updatedDescription } = this.state;
        const {tarea} = this.props;

        return (
            <div>
                {isEditing ? (
                    <div>
                        <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => this.setState({ updatedTitle: e.target.value})}
                        />
                        <textarea
                        value={updatedDescription}
                        onChange={(e) => this.setState({ updatedDescription: e.target.value})}
                        />
                        <button onClick={this.manejarSaveClick}>Guardar</button>
                        <button onClick={this.manejarCancelClick}>Cancelar</button>
                    </div>
                ) : (
                    <div>
                        <h2>{tarea.title}</h2>
                        <p>{tarea.description}</p>
                        <button onClick={this.manejarEditClick}>Editar</button>
                        <button onClick={this.manejarDeleteClick}>Eliminar</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Tarea;