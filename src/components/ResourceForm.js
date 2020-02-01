import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';

const ResourceForm = (props) => {

    const [info, setInfo] = React.useState({
        title: '',
        description: '',
        link: '',
        subject: '',
        status: '',
    })
    
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
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
                    name="title"
                    value={info.title}
                    placeholder="name your resource"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    value={info.description}
                    placeholder="give a brief summary"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control
                    type="text"
                    name="link"
                    value={info.link}
                    placeholder="resource URL"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group id="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select">
                    {props.subjects.map(subject => <option key={subject.tab} value={subject.tab}>{subject.tab}</option>)}
                </Form.Control>
            </Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Group id="status">
                <Form.Check
                    type="radio"
                    label="Todo"
                    name="status"
                    value="Todo"
                    checked={info.status==="Todo"}
                    onChange={handleChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="In Progress"
                    name="status"
                    value="In Progress"
                    checked={info.status==="In Progress"}
                    onChange={handleChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Completed"
                    name="status"
                    value="Completed"
                    checked={info.status==="Completed"}
                    onChange={handleChange}
                    inline
                    required
                    />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}

const mapStateToProps = ({subjects}) => ({
    subjects
})

export default connect(mapStateToProps)(ResourceForm);
