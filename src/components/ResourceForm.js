import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ResourceForm = (props) => {

    const [info, setInfo] = React.useState({
        title: '',
        description: '',
        link: '',
        status: '',
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
                    value={info.title}
                    placeholder="name your resource"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    id="Description"
                    value={info.description}
                    placeholder="give a brief summary"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                    type="text"
                    id="Link"
                    value={info.link}
                    placeholder="resource URL"
                    onChange={handleChange}
                    />
            </Form.Group>
            {/* Add Subject checkboxes */}
            {/* Add Status radios */}
            <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}

export default ResourceForm;
