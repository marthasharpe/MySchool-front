import React from 'react';
import { Card, Badge, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import EditResource from '../EditResource';

const linkStyle = {
    lineHeight: 1,
    textDecoration: "none",
}

const ResourceCards = (props) => {
    
    // only display resources that match the subject tab
    let resources = [];
    if (props.resources.length > 0) {
        resources = props.resources.filter(
            resource => resource.subject === props.subject.tab
        )
    }
    
    return (
        <React.Fragment>
            {resources.length > 0 ? resources.map(resource => {
                return (
                    <Card key={resource._id} style={{ marginTop: '2rem', minWidth: 310, maxWidth: 450 }}>
                        <Card.Header as="h5">
                            {resource.title} <Badge variant="secondary" pill>{resource.status}</Badge>
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
                            <EditResource id={resource._id}/>
                            /
                            <Button variant="link" style={linkStyle}>Delete</Button>
                        </Card.Footer>
                    </Card>
                )
            }) : (
                <Container>
                    <h5 style={{marginTop: 50, textAlign: "center"}}>You have no resources saved.</h5>
                    <Button variant="success" block>Delete Subject</Button>
                </Container>
            )}
        </React.Fragment>
    )
}

const mapStateToProps = ({resources}) => ({
    resources
})

export default connect(mapStateToProps)(ResourceCards);
