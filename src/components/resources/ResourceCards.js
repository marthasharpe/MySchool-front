import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

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
                    <Card border="success" key={resource.link} style={{ marginTop: '2rem'}}>
                        <Card.Body>
                            <Card.Title>
                                {resource.title} <Badge variant="secondary" pill>{resource.status}</Badge>
                            </Card.Title>
                            <Card.Text>{resource.description}</Card.Text>
                            <Card.Link
                                href={resource.link}
                                target="_blank"
                                >
                            Go to Resource
                            </Card.Link>
                        </Card.Body>
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
