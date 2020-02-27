import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ResourceForm from '../resourceForm/ResourceForm';
import './ResourceModal.css';

const ResourceModal = () => {
    
    // modal controls
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button onClick={handleShow} variant="link" id="nav-btn">
                + New Resource
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ResourceForm handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default ResourceModal;
