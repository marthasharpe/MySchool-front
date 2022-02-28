import React from "react";
import { connect } from "react-redux";
import { addSubject } from "store/actions/subjectActions";
import { Modal, Button } from "react-bootstrap";
import SubjectForm from "../subjectForm/SubjectForm";
import "./NewSubjectButton.css";

const NewSubjectButton = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button onClick={handleShow} variant="success" id="new-subject">
        + New Subject
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SubjectForm handleClose={handleClose} setKey={props.setKey} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = ({ subjects }) => ({
  subjects,
});

const mapDispatchToProps = {
  addSubject,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSubjectButton);
