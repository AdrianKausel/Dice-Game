import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';


library.add(fas)



const initialState = {
    player : '',
    email: '',
}


function UserRegister({createData}) {

    


    const [isExploding, setIsExploding] = React.useState(false);
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();

    
    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    
    const add = async e => {
        e.preventDefault()
        createData(form)
        navigate('/ganadores')
        }    

    
        useEffect(() => {
            window.scrollTo(0, 0)
            setIsExploding(true)
        },[])    


    return (
        <Form onSubmit={add}>
            
            <div>
            <>{isExploding && <ConfettiExplosion width='2000' />}</>;
            <h1 className='formTitle'> Felicitaciones! Eres el ganador.</h1>
            <h1 className='formTitle'> Ingresa tus datos:</h1>
                <Form.Group className="mb-3">
                    <Form.Label className='registerBox'>Nombre jugador:</Form.Label>
                        <Form.Control placeholder="Nombre de jugador 1" name='player' value={form.player} type="string" onChange={updateForm} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='registerBox'>Correo electronico:</Form.Label>
                    <Form.Control  name='email' value={form.email} type="email" onChange={updateForm} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Siguiente
                </Button>
            </div>
        </Form>
);
}
export default UserRegister;