import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const ResourceCards = (props) => {
    return (
        <React.Fragment>
            {props.resource.Sources.map(source => {
                return (
                    <Card border="success" key={source.Link} style={{ marginTop: '2rem'}}>
                        <Card.Body>
                            <Card.Title>
                                {source.Title} <Badge variant="secondary" pill>{source.Status}</Badge>
                            </Card.Title>
                            <Card.Text>{source.Description}</Card.Text>
                            <Card.Link
                                href={source.Link}
                                target="_blank"
                                >
                            Go to Source
                            </Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}

export default ResourceCards;
