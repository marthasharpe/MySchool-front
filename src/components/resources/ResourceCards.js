import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const linkStyle = {
    lineHeight: 1,
    textDecoration: "none",
}

const ResourceCards = (props) => {
    
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
                    <Card key={resource.id} style={{ marginTop: '2rem'}}>
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
                            <Button
                                variant="link"
                                style={linkStyle}
                                >
                                Edit
                            </Button>
                            /
                            <Button variant="link" style={linkStyle}>Delete</Button>
                        </Card.Footer>
                    </Card>
                )
            }) : null}
        </React.Fragment>
    )
}

const mapStateToProps = ({resources}) => ({
    resources
})

export default connect(mapStateToProps)(ResourceCards);
