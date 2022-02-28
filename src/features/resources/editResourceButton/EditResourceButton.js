import React from "react";
import { Button, Modal } from "react-bootstrap";
import ResourceForm from "../resourceForm/ResourceForm";
import "./EditResourceButton.css";

const EditResourceButton = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="link" onClick={handleShow} className="link">
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResourceForm handleClose={handleClose} resource={props.resource} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default EditResourceButton;
