
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modals from './Modals';
import style from '../Styles/objetive.module.css';

const Objetive = () => {

   const [show, setShow] = useState(false);
   const [input, setInput] = useState({
      one: '',
      two: [],
   });

   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
   const handleChangeModal = (e) => {
      setInput({
         ...input, 
         one: e.target.value
      });
   }
   const handleNewObjetive = (e) => {
      e.preventDefault();
      setInput({
         ...input, 
         two: [...input.two, input.one]
      });
      setShow(false)
   }

   return (
      <div className={style.container}>
         <h2>Objetivos</h2>

         <Button variant="primary" onClick={handleShow}>
            Nuevo Objetivo
         </Button>

         <Modals 
            handleClose={handleClose}
            handleNewObjetive={handleNewObjetive}
            handleChangeModal={handleChangeModal}
            show={show}
         />

         <div>           
            {
               input.two?.map(e=>(
                  <div className='shadow p-3 mb-5' key={e}>{e}</div>
               ))
               
            }  
         </div> 

      </div>
   );
}

export default Objetive;
