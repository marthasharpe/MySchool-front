import React from "react";
import "./Dashboard.css";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

const Dashboard = () => {
  return (
    <Container className="dashboard-container">
      <h1>Welcome!</h1>
      <p>
        If you're learning online, this is the place to save the resources you
        find. You can also create your own subjects to keep them organized. To
        get started, just go to your resources!
      </p>
    </Container>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Dashboard);
