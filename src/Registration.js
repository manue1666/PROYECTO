import { useState } from "react";
import { Button, Card, Container, Form,Nav,Navbar } from "react-bootstrap";

const Registration= ()=>{

  const [data,setData] = useState({});


  const onChangeRegister =(e)=>{
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;
    setData(nData)
    console.log(nData)
  }


  const onSubmit = ()=>{
    console.log(data)
  };




    return (

        <><Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Cuestionarios</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/inicio_sesion">Login</Nav.Link>
                    <Nav.Link href="/sing_in">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar><Container className="mt-3">
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Inicia sesion
                        </Card.Title>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control placeholder="ingresa tu correo" type="email" name="email" onChange={onChangeRegister}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="ingresa nombre" name="nombre" onChange={onChangeRegister}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control placeholder="ingresa apellidos" name="apellido" onChange={onChangeRegister}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control placeholder="ingresa contraseña" type="password" name="password" onChange={onChangeRegister}></Form.Control>
                            </Form.Group>
                            <Button onClick={() => onSubmit()} className="mt-3" variant="primary" type="submit">Registrate</Button>
                        </Form>



                    </Card.Body>
                </Card>
            </Container></>



    );
  }



export default Registration;