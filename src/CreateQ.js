import React from "react";
import { Card, Container, Navbar, Nav, Form, Button } from 'react-bootstrap';

const CreateQ = () => {
    return (
        <Container>
            <Card className="mt-5">
                <Card.Title className="mt-3 text-center">Crea tu cuestionario</Card.Title>
                <Form.Control placeholder="Ingresa la descripcion del cuestionario"></Form.Control>
                <Card.Body>
                    <Form.Control placeholder="Ingresa tu pregunta"></Form.Control>
                    <Form.Select className="mt-3" aria-label="Default select example">
                        <option>Selecciona el tipo de pregunta</option>
                        <option value="1">Opcion multiple</option>
                        <option value="2">Casillas de verificacion</option>
                        <option value="3">Pregunta Cerraada</option>
                    </Form.Select>
                    <Form.Check className="aling-items-end mt-2"
                        type="switch"
                        id="custom-switch"
                        label="Pregunta Obligatoria"
                    />
                    <Button  className="mt-2"type="Primary">Crear nueva pregunta</Button>
                </Card.Body>
                    <Button type="Dark">Crear cuestionario</Button>
            </Card>
            <Button variant="success" className="mt-3">Vista previa</Button>
        </Container>
    )
};

export default CreateQ;