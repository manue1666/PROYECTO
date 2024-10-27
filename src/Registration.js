import { useState } from "react";
import { Button, Card, Container, Form,Nav,Navbar } from "react-bootstrap";
import { Barra } from "./Navbar";

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

        <>
        <Barra/>
        <Container className="mt-3">
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title><i class="bi bi-person-plus"></i> Registrate
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