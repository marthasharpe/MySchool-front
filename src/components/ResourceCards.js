import React from 'react';
import { Row, Card, Button, Badge } from 'react-bootstrap';

const ResourceCards = (props) => {
    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Button style={{marginTop: "2rem"}} variant="outline-success">+ New Resource</Button>
            </Row>
            {props.resource.Sources.map(source => {
                return (
                    <Card key={source.Link} style={{ margin: '2rem' }}>
                        <Card.Body>
                            <Card.Title>{source.Title}</Card.Title>
                            <Card.Text>{source.Description}</Card.Text>
                            <Badge variant="secondary">{source.Status}</Badge>
                            <Card.Link
                                href={source.Link}
                                target="_blank"
                                >
                            Go to Source
                            </Card.Link>
                            <Card.Link
                                href={source.Link}
                                target="_blank"
                                >
                            View Details
                            </Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}

export default ResourceCards;
