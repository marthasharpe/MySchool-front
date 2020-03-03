import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ResourceForm from '../resourceForm/ResourceForm';
import './NewResource.css';

const NewResource = () => {
    
    // modal controls
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button onClick={handleShow} variant="light" id="new-resource" block>
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

export default NewResource;
