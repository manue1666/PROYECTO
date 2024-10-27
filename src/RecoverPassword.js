import React, { useState } from 'react'
import { Button, Card, Container, Form , Navbar, Nav} from 'react-bootstrap'
import { Barra } from './Navbar';

const RecoverPassword = () => {
    const[email,setEmail] = useState("");
    const onChange = (e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    }
  return (

    <>
        <Barra/>

      <Container className='mt-3'>
              <Card>
                  <Card.Body>
                      <Card.Title>
                          Ingresa tu correo electronico </Card.Title>
                      <Form.Control name="email" placeholder="Ingrese su correo electronico" onChange={onChange}></Form.Control>
                      <Button className='mt-3' variant='warning' type='submit'> Recuperar contraseña</Button>
                  </Card.Body>
              </Card>
          </Container></>
  )
}

export default RecoverPassword;