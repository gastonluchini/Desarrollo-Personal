
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {

   return (
      <Container className='containerHome'>
         <Row>
            <Col sm={12} md={12} lg={12} className='colHome'>
               <h1>La plataforma creada </h1>
               <h1>para que logres tus objetivos</h1>
            </Col>
               
            <Col className='colHome'>
               <Card style={{ width: '18rem' }}>
                  <Card.Body>
                     <Card.Title>Productividad</Card.Title>
                     <Card.Text>
                        Vas lograr llegar a conseguir tus objetivos con la ayuda de nuestra herramienta.
                     </Card.Text>
                     <Card.Link href="#">Habitos</Card.Link>
                  </Card.Body>
               </Card>
            </Col>
               
            <Col className='colHome'>
            <Card style={{ width: '18rem' }}>
                  <Card.Body>
                     <Card.Title>Altos resultados</Card.Title>
                     <Card.Text>
                        Al utilizar esta poderosa herramienta, vas encontrar un aliado para conseguir aquellos resultados deseados.
                     </Card.Text>
                     <Card.Link href="#">Habitos</Card.Link>
                  </Card.Body>
               </Card>
            </Col>

            <Col className='colHome'>
            <Card style={{ width: '18rem' }}>
                  <Card.Body>
                     <Card.Title>Alcanzar tus sueños</Card.Title>
                     <Card.Text>
                        Cualquiera sea tus metas, AppObjetivos va a ayudarte a que consigas lo que quieras.
                     </Card.Text>
                     <Card.Link href="#">Habitos</Card.Link>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}

export default Home;
