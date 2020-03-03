import React from 'react';
import { Card, Badge, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import EditResource from '../editResource/EditResource';
import { deleteSubject } from '../../store/actions/subjectActions';
import { deleteResource } from '../../store/actions/resourceActions';
import './ResourceCards.css';

const linkStyle = {
    lineHeight: 1,
    textDecoration: "none",
}

const ResourceCards = (props) => {
    
    // only display resources that match the subject name
    let resources = [];
    if (props.resources.resourceList.length > 0) {
        resources = props.resources.resourceList.filter(
            resource => resource.subject === props.subject.name
        )
    }

    const handleDeleteSubject = () => {
        props.deleteSubject(props.subject._id);
        props.setKey('New Subject');
    }
    
    return (
        <Container className="resources-container">
            {resources.length > 0 ? resources.map(resource => {
                return (
                    <Card key={resource._id} className="resource-cards">
                        <Card.Header as="h5">
                                {resource.title} <Badge variant="secondary" pill>
                                    {resource.status}
                                </Badge>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{resource.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                href={resource.link}
                                target="_blank"
                                variant="link"
                                style={linkStyle}
                                >
                                Go to Resource
                            </Button>
                            /
                            <EditResource resource={resource}/>
                            /
                            <Button
                                onClick={() => props.deleteResource(resource._id)}
                                variant="link"
                                style={linkStyle}
                                >
                                Delete
                            </Button>
                        </Card.Footer>
                    </Card>
                )
            }) : (
                <div style={{margin: 50}}>
                    <h5>You have no resources saved.</h5>
                    <Button
                        onClick={handleDeleteSubject}
                        variant="success"
                        >
                        Delete Subject
                    </Button>
                </div>
            )}
        </Container>
    )
}

const mapStateToProps = ({resources}) => ({
    resources
})

const mapDispatchToProps = ({
    deleteSubject,
    deleteResource
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCards);
