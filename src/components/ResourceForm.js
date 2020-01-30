import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ResourceForm = (props) => {
    
    const handleChange = (e) => {
        console.log(e);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        props.handleClose();
    }
    
    return (
        <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="name your resource"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="give a brief summary"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="resource URL"
                    />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}

export default ResourceForm;
