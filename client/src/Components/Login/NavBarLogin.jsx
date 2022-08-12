
import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBarLogin = () => {

   return (
      <div>
         <Navbar bg="dark" variant="dark">
            <Container>

               <Navbar.Brand href="#home">App Objetivos</Navbar.Brand>

               <Nav className="me-auto">
                  <Nav.Link href="#home">Objetivos</Nav.Link>
                  <Nav.Link href="#features">Finanzas</Nav.Link>
                  <Nav.Link href="#pricing">Rueda de la vida</Nav.Link>
               </Nav>

               <Link to='/'><Button>Cerrar Sesion</Button></Link>

            </Container>
         </Navbar>
      </div>
   );
}

export default NavBarLogin;
