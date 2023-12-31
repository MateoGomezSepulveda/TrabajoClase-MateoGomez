import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Button,Checkbox, Form} from 'semantic-ui-react';
import { useHistory } from 'react-router';

export default function Create(){
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postAPIData = ()=>{
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`,{
            firstName,
            lastName,
            checkbox
        }
        ).then(()=>{
            history.push('/')
        })
    }
    return(
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Apellido</label>
                    <input placeholder='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <Checkbox label="Acepto los terminos y condiciones:" checked={checkbox} onChange={()=> setCheckbox(!checkbox)}>

                    </Checkbox>
                </Form.Field>
                <Button type="submit" onClick={postAPIData}>Crear</Button>
            </Form>
        </div>
    )
}