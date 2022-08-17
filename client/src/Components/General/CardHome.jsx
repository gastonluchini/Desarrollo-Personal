
import React from 'react';
import { Card } from 'react-bootstrap';

const CardHome = ({ title, text, link }) => {

   return (
      <Card style={{ width: '18rem' }}>
         <Card.Body className='cardHome-1'>
            <Card.Title>{title}</Card.Title>
               <Card.Text>
                  {text}
               </Card.Text>
            <Card.Link href="#">{link}</Card.Link>
         </Card.Body>
      </Card> 
   );
}

export default CardHome;
