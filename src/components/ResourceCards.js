import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const ResourceCards = (props) => {
    return (
        <Container>
            {props.resource.Sources.map(source => {
                return (
                    <Card key={source.Link} style={{ width: '18rem', margin: '2rem' }}>
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
        </Container>
    )
}

export default ResourceCards;
