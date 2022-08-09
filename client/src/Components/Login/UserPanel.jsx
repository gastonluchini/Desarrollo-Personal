
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Objetive from './Objetive';

const UserPanel = () => {

   const [component, setComponent] = useState('')

   const handleInput = (e) => {
      e.preventDefault();
      const name = e.target.name
      if (name === 'objetivos') setComponent(<Objetive />)
   }

   return (
      <div>
         <Link to='/'><div>Volver</div></Link>

        <Button name='objetivos' onClick={handleInput}>Objetivos</Button>

         <div>Habitos</div>

         <div>{component}</div>

      </div>
   );
}

export default UserPanel;
