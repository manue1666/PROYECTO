import React from 'react';
import { Card, Container, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Cuestionarios</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
        </Nav>
        </Container>
    </Navbar>

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