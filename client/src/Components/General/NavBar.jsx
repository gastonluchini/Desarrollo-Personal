import React from "react";
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
   return (
      <div>
         <Navbar expand="lg" bg="dark" variant="dark">
            <Container>

               <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                  <span className='navbar-toggler-icon'></span>
               </Navbar.Toggle>

               <Navbar.Brand href="#home">App Objetivos</Navbar.Brand>

               <Navbar.Collapse>

                  <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#objetivos">¿Qué es AppObjetivos?</Nav.Link>
                     <Nav.Link href="#mejorar">Mejorar</Nav.Link>
                  </Nav>

                  <Link to='/user'><Button>Empezar ahora</Button></Link>

               </Navbar.Collapse>

            </Container>
         </Navbar>
      </div>
   );
};

export default NavBar;
