import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import { addResource, editResource } from '../../actions/actionCreators';
import uuid from 'react-uuid';

const ResourceForm = (props) => {

    const [info, setInfo] = React.useState({
        title: '',
        description: '',
        link: '',
        subject: '',
        status: '',
    })

    React.useEffect(() => {
        if (props.id) {
            let resource = props.resources.find(resource => resource.id === props.id)
            setInfo({
                title: resource.title,
                description: resource.description,
                link: resource.link,
                subject: resource.subject,
                status: resource.status,      
            })
        }
    }, [props.id, props.resources])

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.id ? props.editResource(props.id, info) : props.addResource({id: uuid(), ...info})
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
                    required
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
                    required
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
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select" name="subject" onChange={handleChange}>
                    <option value="">Choose a Subject</option>
                    {props.subjects.map(subject => <option key={subject.tab} value={subject.tab}>{subject.tab}</option>)}
                </Form.Control>
            </Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Group>
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
            <Button variant="success" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}

const mapStateToProps = ({subjects, resources}) => ({
    subjects, resources
})

const mapDispatchToProps = {
    addResource,
    editResource
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm);
