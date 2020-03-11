import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import EditResource from '../editResource/EditResource';
import { deleteResource } from '../../store/actions/resourceActions';
import './ResourceCards.css';

const linkStyle = {
    lineHeight: 1,
    textDecoration: "none",
}

const ResourceCards = (props) => {      
    return (
        <Card key={props.resource._id} className="resource-cards">
            <Card.Header as="h5">
                    {props.resource.title}
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.resource.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    href={props.resource.link}
                    target="_blank"
                    variant="link"
                    style={linkStyle}
                    >
                    Go to Resource
                </Button>
                /
                <EditResource resource={props.resource}/>
                /
                <Button
                    onClick={() => props.deleteResource(props.resource._id)}
                    variant="link"
                    style={linkStyle}
                    >
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    )
}

const mapDispatchToProps = ({
    deleteResource
})

export default connect(null, mapDispatchToProps)(ResourceCards);
