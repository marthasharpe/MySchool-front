import React from 'react';
import { connect } from 'react-redux';
import { addSubject } from '../../store/actions/subjectActions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './NewSubject.css';

const NewSubject = (props) => {
    const [info, setInfo] = React.useState({
        name: '',
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
            name: '',
        })
    }
    
    return (
        <Container className="newSubject-container">
            <Row className="justify-content-center">
                <Col md={{span: 8}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Subject Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={info.name}
                                placeholder="name your subject"
                                onChange={handleChange}
                                required
                                />
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = {
    addSubject
}

export default connect(null, mapDispatchToProps)(NewSubject);
