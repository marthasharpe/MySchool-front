import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const ResourceCards = () => {
    return (
        <Container>
            <Card style={{ width: '18rem', margin: '2rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '2rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ResourceCards;
