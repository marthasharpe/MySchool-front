import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import icon from "assets/adaptive-icon.png";
import { userLogout, userDelete } from "store/actions/userActions";
import AlertModal from "components/alertModal/AlertModal";
import "./AppBar.css";

const AppBar = (props) => {
  let history = useHistory();
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleLogout = () => {
    props.userLogout();
    sessionStorage.clear();
    history.push("/");
  };

  const handleDeleteAccount = () => {
    handleCloseModal();
    props.userDelete();
    sessionStorage.clear();
    history.push("/");
  };

  return (
    <>
      {showModal && (
        <AlertModal
          message="Are you sure you want to delete your account?"
          show={showModal}
          handleClose={handleCloseModal}
          handleConfirm={handleDeleteAccount}
          confirm
        />
      )}
      <Navbar variant="dark" sticky="top" expand="sm">
        <Navbar.Brand>
          <NavLink to="/" className="link">
            <img
              src={icon}
              width="50"
              height="35"
              className="d-inline-block align-top"
              alt="MySchool logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="appbar-nav" />
        <Navbar.Collapse id="appbar-nav" className="justify-content-end">
          {props.user.loggedIn ? (
            <NavDropdown title="Account" id="dropdown">
              <NavDropdown.Item onClick={handleLogout}>
                Log Out
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowModal}>
                Delete Account
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav>
              <NavLink to="/login" className="link">
                Log In
              </NavLink>
              <NavLink to="/signup" className="link">
                Sign Up
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = {
  userLogout,
  userDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
