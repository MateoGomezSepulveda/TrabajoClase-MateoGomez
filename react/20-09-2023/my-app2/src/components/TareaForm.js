import React, { Component } from 'react';

class TareaForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
        };
    }

    manejarTitleChange = (e) =>{
        this.setState({ title: e.target.value});
    };

    manejarDescriptionChange= (e) =>{
        this.setState({ description: e.target.value})
    };

    manejarSubmit = (e) =>{
        e.preventDefault();
        const {title, description} = this.state;
        const nuevaTarea = {
        id: Date.now(),
            title,
            description,
        };
        this.props.addTarea(nuevaTarea);
        this.setState({title:'', description:''});
    };

    render() {   
        const {title, description} = this.state;
    
        return (
            <div>
                <h2>Agregar Nueva Tarea</h2>
                <form onSubmit={this.manejarSubmit}>
                    <input
                    type="text"
                    placeholder='Titulo'
                    value={title}
                    onChange={this.manejarTitleChange}
                    />
                    <texTarea
                    placeholder="Descripcion"
                    value={description}
                    onChange={this.manejarDescriptionChange}
                    />
                    <button type="submit">Agregar</button>
                </form>
            </div>
        );
    }
};

export default TareaForm;

    
