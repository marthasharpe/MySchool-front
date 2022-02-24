import React from "react";
import { Button } from "react-bootstrap";
import AlertModal from "components/alertModal/AlertModal";
import "./DeleteSubjectButton.css";

const DeleteSubjectButton = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleDeleteSubject = () => {
    props.deleteSubject(props.subjectId);
    props.setKey("New Subject");
    handleCloseModal();
  };

  return (
    <React.Fragment>
      {showModal && (
        <AlertModal
          message="Are you sure you want to delete this subject?"
          show={showModal}
          handleClose={handleCloseModal}
          handleConfirm={handleDeleteSubject}
          confirm
        />
      )}
      <Button variant="danger" onClick={handleShowModal} id="delete-button">
        Delete Subject
      </Button>
    </React.Fragment>
  );
};

export default DeleteSubjectButton;
