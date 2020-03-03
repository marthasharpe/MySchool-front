import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ResourceForm from '../resourceForm/ResourceForm';
import './EditResource.css';

const linkStyle = {
    lineHeight: 1,
    textDecoration: "none",
}

const EditResource = (props) => {
    
    // modal controls
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="link" onClick={handleShow} style={linkStyle}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ResourceForm handleClose={handleClose} resource={props.resource}/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default EditResource;
