import React from 'react';
import { connect } from 'react-redux';
import { postSubject } from '../../store/actions/subjectActions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
        props.postSubject(info);
        setInfo({
            tab: '',
        })
    }
    
    return (
        <Container style={{marginTop: 50}}>
            <Row className="justify-content-center">
                <Col md={{span: 8}}>
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
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = {
    postSubject
}

export default connect(null, mapDispatchToProps)(NewSubject);
