import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

export const RecoverPassword = () => {
    const[email,setEmail] = useState("");
    const onChange = (e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    }
  return (
    <Container>
        <Card>
            <Card.Body>
                <Card.Title>
                    Ingresa tu correo electronico </Card.Title>
                    <Form.Control name="email" placeholder="Ingrese su correo electronico" onChange={onChange}></Form.Control>
                    <Button className='mt-3' variant='warning' type='submit'> Recuperar contraseña</Button>
            </Card.Body>
        </Card>
    </Container>
  )
}