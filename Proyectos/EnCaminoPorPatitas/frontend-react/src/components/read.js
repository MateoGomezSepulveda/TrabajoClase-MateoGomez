import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Table, Button, TableHeader} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default function Read(){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8033/api/usuarios`)
        .then((response)=>{
            console.log(response.data.usuarios);
            setAPIData(response.data.usuarios);
        })
    },[]);

    const setData = (data) =>{
        let {_id, nombre, email, password, rol} = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        localStorage.setItem('Rol', rol);
    }

    const getData = () =>{
        axios.get(`http://localhost:8033/api/usuarios`)
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const onDelete = (_id) =>{
        console.log(_id);
        axios.delete(`http://localhost:8033/api/usuarios/${_id}`)
        .then(()=>{
            getData();
        })
    };

    return(
        <div>
            <Link to='/crear'>
                <Table.Cell>
                    <Button>Crear</Button>
                </Table.Cell>
            </Link>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Rol</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            <Table.Body>
                {
                    
                        APIData.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data._id}</Table.Cell>
                                    <Table.Cell>{data.nombre}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.rol}</Table.Cell>
                                    <Link to='/update'>
                                        <Table.Cell>
                                            <Button onClick={() => setData(data)}>Actualizar</Button>
                                        </Table.Cell>
                                    </Link>
                                        <Table.Cell>
                                            <Button onClick={() => onDelete(data._id)}>Delete</Button>
                                        </Table.Cell>
                                </Table.Row>
                            )
                        })     
                }
            </Table.Body>
            </Table>
        </div>
    )
}