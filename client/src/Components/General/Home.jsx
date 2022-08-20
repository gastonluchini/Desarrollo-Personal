
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import CardHome from './CardHome';
import style from '../Styles/home.module.css';

const Home = () => {

   return (
      <div>
      
         <NavBar />

         <Container className='containerHome' style={{ border: '1px solid red', padding: '10px' }}>
            
            <Row className='rowHome1'>
               <Col sm={12} md={12} lg={12}>
                  <h1>La plataforma creada </h1>
                  <h1>para que logres tus objetivos </h1>
               </Col>
            </Row>

            <Row className='rowHome2'>  

               <Col className='colHome'>
                  <CardHome 
                     title={'Productividad'}
                     text={'Vas lograr llegar a conseguir tus objetivos con la ayuda de nuestra herramienta.'}
                     link={'Habitos'}
                  />
               </Col>
                  
               <Col className='colHome'>
                  <CardHome 
                     title={'Altos resultados'}
                     text={'Al utilizar esta poderosa herramienta, vas encontrar un aliado para conseguir aquellos resultados deseados.'}
                     link={'Habitos'}
                  />
               </Col>

               <Col className='colHome'>
                  <CardHome 
                     title={'Alcanzar tus sueños'}
                     text={'Cualquiera sea tus metas, AppObjetivos va a ayudarte a que consigas lo que quieras.'}
                     link={'Habitos'}
                  />
               </Col>

            </Row>

            <Row>

               <Col>
                  <h4>Cual es aquella meta que te gustaria alcanzar?</h4>
                  <h4>Cual es tu objetivo estrella de este año?</h4>
               </Col>

            </Row>

            <Row>

               <Col>
                  <img src="https://placeimg.com/200/200/tech" alt="Tech" />
               </Col>

               <Col>
                  <img src="https://placeimg.com/200/200/tech" alt="Tech" />
               </Col>

               <Col>
                  <img src="https://placeimg.com/200/200/tech" alt="Tech" />
               </Col>

            </Row>

            <Row>

               <Col>
                  <Link to='/user'><Button>Empezar ahora</Button></Link>
               </Col>
            
            </Row>

         </Container>

         <div className={style.containerTest}>
            <div className={style.boxUno}>1</div>
         </div>

         <div className={style.boxDos}>2</div>

         <div className={style.boxTres}>3</div>

      </div>
   );
}

export default Home;
