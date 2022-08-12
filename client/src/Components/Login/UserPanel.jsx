
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Habits from './Habits';
import Objetive from './Objetive';
import style from '../Styles/userPanel.module.css';
import NavBarLogin from './NavBarLogin';
import VisionBoard from './VisionBoard';


const UserPanel = () => {

   const [component, setComponent] = useState(<VisionBoard/>)

   const handleInput = (e) => {
      e.preventDefault();
      const name = e.target.name
      if (name === 'panelVision') setComponent(<VisionBoard />)
      if (name === 'objetivos') setComponent(<Objetive />)
      if (name === 'habits') setComponent(<Habits />)
   }

   return (  
      <div>

         <NavBarLogin /> 

         <div className={style.containerUserPanel}>

            <h5>Bienvenido:</h5>
               
            <div className={style.containerButtons}>
               <Button className={style.button} name='panelVision' onClick={handleInput}>Panel de Vision</Button>
               <Button className={style.button} name='objetivos' onClick={handleInput}>Objetivos</Button>    
               <Button className={style.button} name='habits' onClick={handleInput}>Habitos</Button>
            </div> 
          
            <div className={style.containerComponent}>{component}</div>
               
         </div>
      </div> 
   );
}

export default UserPanel;
