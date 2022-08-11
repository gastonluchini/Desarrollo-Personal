
import React from 'react';
import { Card } from 'react-bootstrap';

const CardHome = ({ title, text, link }) => {

   return (
      <div>

         <Card style={{ width: '18rem' }}>
            <Card.Body>
               <Card.Title>{title}</Card.Title>
                  <Card.Text>
                     {text}
                  </Card.Text>
               <Card.Link href="#">{link}</Card.Link>
            </Card.Body>
         </Card>
         
      </div>
   );
}

export default CardHome;
