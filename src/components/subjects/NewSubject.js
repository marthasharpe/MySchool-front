import React from 'react';
import { connect } from 'react-redux';
import { addSubject } from '../../actions/actionCreators';
import { Container, Form, Button } from 'react-bootstrap';

const NewSubject = (props) => {
    const [info, setInfo] = React.useState({
        tab: '',
    })
    
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSubject(info);
        setInfo({
            tab: '',
        })
    }
    
    return (
        <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Subject Name</Form.Label>
                <Form.Control
                    type="text"
                    name="tab"
                    value={info.tab}
                    placeholder="name your subject"
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}

const mapDispatchToProps = {
    addSubject
}

export default connect(null, mapDispatchToProps)(NewSubject);
