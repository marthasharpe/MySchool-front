import React from "react";
import "./AlertModal.css";
import { Modal, Button } from "react-bootstrap";

const AlertModal = (props) => {
  return (
    <Modal
      show={props.show}
      backdrop="static"
      keyboard={false}
      centered
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Hey there...</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        {props.confirm ? (
          <>
            <Button variant="secondary" onClick={props.handleClose}>
              No, go back
            </Button>
            <Button variant="success" onClick={props.handleConfirm}>
              Yes, do it
            </Button>
          </>
        ) : (
          <Button variant="success" onClick={props.handleClose}>
            Ok
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
