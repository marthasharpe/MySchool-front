import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ResourceForm = (props) => {

    const [info, setInfo] = React.useState({
        Title: '',
        Description: '',
        Link: '',
        Status: '',
    })
    
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.id]: e.target.value
        })
        console.log(info);
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
                    id="Title"
                    value={info.Title}
                    placeholder="name your resource"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    id="Description"
                    value={info.Description}
                    placeholder="give a brief summary"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                    type="text"
                    id="Link"
                    value={info.Link}
                    placeholder="resource URL"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}

export default ResourceForm;
