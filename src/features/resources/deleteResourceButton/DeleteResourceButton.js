import React from "react";
import { Button } from "react-bootstrap";
import AlertModal from "components/alertModal/AlertModal";
import "./DeleteResourceButton.css";

const DeleteResourceButton = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleDeleteResource = () => {
    handleCloseModal();
    props.deleteResource(props.resourceId);
  };

  return (
    <React.Fragment>
      {showModal && (
        <AlertModal
          message="Are you sure you want to delete this resource?"
          show={showModal}
          handleClose={handleCloseModal}
          handleConfirm={handleDeleteResource}
          confirm
        />
      )}
      <Button variant="link" onClick={handleShowModal} className="link">
        Delete
      </Button>
    </React.Fragment>
  );
};

export default DeleteResourceButton;
