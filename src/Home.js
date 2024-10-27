import React from 'react';
import { Card, Container, Navbar, Nav } from 'react-bootstrap';
import { Barra } from './Navbar';

const Home = () => {
return (
    <>
    <Barra/>

    <Container className="mt-3">
        <Card>
        <Card.Body>
            <Card.Title>Bienvenidos a nuestra página para crear formularios</Card.Title>
            <Card.Text>
            Aquí encontrarás todo lo que necesitas para diseñar y gestionar tus cuestionarios.
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
    </>
);
}

export default Home;