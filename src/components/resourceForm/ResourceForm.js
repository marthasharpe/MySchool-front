import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import { addResource, editResource } from '../../store/actions/resourceActions';

const ResourceForm = (props) => {

    const [info, setInfo] = React.useState({
        title: '',
        description: '',
        link: '',
        subject: '',
        status: '',
    })

    React.useEffect(() => {
        // fill in fields to edit existing resource
        if (props.resource) {
            setInfo({
                title: props.resource.title,
                description: props.resource.description,
                link: props.resource.link,
                subject: props.resource.subject,
                status: props.resource.status,
            })
        }
    }, [props.resource])

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // info to edit existing resource or add new resource
        props.resource ? props.editResource(info, props.resource._id) : props.addResource(info);
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
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select" name="subject" onChange={handleChange}>
                        <option value="">Choose a Subject</option>
                        {props.subjects.subjectList.map(subject => (
                            <option key={subject.name} value={subject.name}>
                                {subject.name}
                            </option>
                        ))}
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
