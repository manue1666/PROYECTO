import React, { useState } from "react";
import { Button, Form, Container, Card, Navbar, Nav } from "react-bootstrap";

const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "abs@example.com" && password === "password") {
      console.log("Inicio de sesión exitoso");
    } else {
      console.error("Error: Credenciales incorrectas");
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Cuestionarios</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/inicio_sesion">Login</Nav.Link>
            <Nav.Link href="/sing_in">regist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Card.Title>Inicia sesion</Card.Title>
            <Form onSubmit={handleSubmit}>
              <div>
                <Form.Label>Correo electrónico:</Form.Label>
                <Form.Control
                  placeholder="Ingresa un correo electrónico"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-3">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button className="mt-3" type="submit">
                Ingresar
              </Button>
              <Button
                href="/recover_password"
                className="position-absolute buttom-0 end-0 mt-3 m-3"
                variant="outline-primary"
              >
                Olvide mi contaseña
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default InicioSesion;
