import React from 'react';
import { Card, Badge, Button, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
// import EditResource from '../EditResource';
import { deleteSubject } from '../../store/actions/subjectActions';
import { deleteResourceRequest } from '../../store/actions/resourceActions';
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
                            {/* <EditResource id={resource._id}/> */}
                            <Button
                                onClick={() => props.deleteResourceRequest(resource._id)}
                                variant="link"
                                style={linkStyle}
                                >
                                Edit
                            </Button>
                            /
                            <Button
                                onClick={() => props.deleteResourceRequest(resource._id)}
                                variant="link"
                                style={linkStyle}
                                >
                                Delete
                            </Button>
                        </Card.Footer>
                    </Card>
                )
            }) : (
                <React.Fragment>
                    <h5 style={{marginTop: 50, textAlign: "center"}}>You have no resources saved.</h5>
                    <Row className="justify-content-center">
                        <Button
                            onClick={handleDeleteSubject}
                            variant="success"
                            >
                            Delete Subject
                        </Button>
                    </Row>
                </React.Fragment>
            )}
        </Container>
    )
}

const mapStateToProps = ({resources}) => ({
    resources
})

const mapDispatchToProps = ({
    deleteSubject,
    deleteResourceRequest
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCards);
