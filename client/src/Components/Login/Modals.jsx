
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modals = ({ handleClose, handleNewObjetive, handleChangeModal, show }) => {

   return (
      <div>
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

export default Modals;
