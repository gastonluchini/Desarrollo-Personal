
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../Styles/visionBoard.module.css';

const VisionBoard = () => {

   return (
      <div className={style.container}>
         <h4>Panel de Visión</h4>

         <Container>
            <Row>

               <Col lg={6} md={6} sm={12} className={style.col}>
                  <img src="https://placeimg.com/200/200/teach" alt="Animals" />
               </Col>

               <Col lg={6} md={6} sm={12} className={style.col}>
                  <img src="https://placeimg.com/200/200/teach" alt="Animals" />
               </Col>

               <Col lg={6} md={6} sm={12} className={style.col}>
                  <img src="https://placeimg.com/200/200/teach" alt="Animals" />
               </Col>

               <Col lg={6} md={6} sm={12} className={style.col}>
                  <img src="https://placeimg.com/200/200/teach" alt="Animals" />
               </Col>

            </Row>
         </Container>
      </div>
   );
}

export default VisionBoard;
