import React from 'react';
import './AlertModal.css';
import { Modal, Button } from 'react-bootstrap';

const AlertModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Hey there...</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={props.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default AlertModal;
