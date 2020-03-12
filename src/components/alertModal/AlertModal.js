import React from 'react';
import './AlertModal.css';
import { Modal } from 'react-bootstrap';

const AlertModal = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Oops...</Modal.Title>
          </Modal.Header>
          <Modal.Body>Something went wrong.</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default AlertModal
