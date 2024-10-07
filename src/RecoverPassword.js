import React, { useState } from 'react'
import { Button, Card, Container, Form , Navbar, Nav} from 'react-bootstrap'

const RecoverPassword = () => {
    const[email,setEmail] = useState("");
    const onChange = (e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    }
  return (

    <><Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="/">Cuestionarios</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="/inicio_sesion">Login</Nav.Link>
                  <Nav.Link href="/sing_in">regist</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
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