
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Objetive = () => {

   const [show, setShow] = useState(false);
   const [input, setInput] = useState({
      one: '',
      two: '',
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
         two: input.one
      });
      setShow(false)
   }


   return (
      <div>
         <h2>Objetivos</h2>

         <Button variant="primary" onClick={handleShow}>
            Nuevo Objetivo
         </Button>

         <div>{input.two}</div>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Ingresa un nuevo objetivo</Modal.Title>
            </Modal.Header>
            <Modal.Body><input onChange={handleChangeModal}></input></Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={handleNewObjetive}>
                  Guardar
               </Button>
            </Modal.Footer>
         </Modal>

      </div>
   );
}

export default Objetive;
