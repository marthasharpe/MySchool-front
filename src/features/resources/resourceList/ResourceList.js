import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import NewResourceButton from "../newResourceButton/NewResourceButton";
import ResourceCard from "../resourceCard/ResourceCard";
import "./ResourceList.css";

const ResourceList = (props) => {
  let resources = props.resources.resourceList;

  return (
    <Container className="resource-list-container">
      <Row className="justify-content-center">
        <NewResourceButton />
      </Row>
      <Row className="justify-content-center">
        {resources.length ? (
          resources.map((resource) => {
            return <ResourceCard key={resource._id} resource={resource} />;
          })
        ) : (
          <div style={{ margin: 50 }}>
            <h5>You have no resources saved.</h5>
          </div>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ resources }) => ({
  resources,
});

export default connect(mapStateToProps)(ResourceList);
