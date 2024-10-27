import { Card, Container, Navbar, Nav } from 'react-bootstrap';

export const Barra =()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/"><i class="bi bi-journals"></i> Cuestionarios</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/inicio_sesion">Login</Nav.Link>
            <Nav.Link href="/sing_in">regist</Nav.Link>
            <Nav.Link href='/createq'>crear cuestionario<i class="bi bi-pencil-square"></i></Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )
}