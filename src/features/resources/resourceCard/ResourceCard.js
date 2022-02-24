import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import EditResourceButton from "../editResourceButton/EditResourceButton";
import DeleteResourceButton from "../deleteResourceButton/DeleteResourceButton";
import { deleteResource } from "store/actions/resourceActions";
import "./ResourceCard.css";

const ResourceCard = (props) => {
  return (
    <Card key={props.resource._id} className="resource-cards">
      <Card.Header as="h5">{props.resource.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.resource.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          href={props.resource.link}
          target="_blank"
          variant="link"
          className="link"
        >
          Go to Resource
        </Button>
        /
        <EditResourceButton resource={props.resource} />/
        <DeleteResourceButton
          deleteResource={props.deleteResource}
          resourceId={props.resource._id}
        />
      </Card.Footer>
    </Card>
  );
};

const mapDispatchToProps = {
  deleteResource,
};

export default connect(null, mapDispatchToProps)(ResourceCard);
