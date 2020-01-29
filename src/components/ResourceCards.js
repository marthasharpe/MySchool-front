import React from 'react';
import Card from 'react-bootstrap/Card';

const ResourceCards = (props) => {
    return (
        <React.Fragment>
            {props.resource.Sources.map(source => {
                return (
                    <Card key={source.Link} style={{ margin: '2rem' }}>
                        <Card.Body>
                            <Card.Title>{source.Title}</Card.Title>
                            <Card.Text>
                            {source.Description}
                            </Card.Text>
                            <Card.Link href={source.Link}>Go</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}

export default ResourceCards;
