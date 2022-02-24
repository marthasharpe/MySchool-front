import React from "react";
import { connect } from "react-redux";
import { addSubject } from "store/actions/subjectActions";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SubjectForm.css";

const SubjectForm = (props) => {
  const [info, setInfo] = React.useState({
    name: "",
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if subject already exists
    if (props.subjects.subjectList.find(({ name }) => name === info.name)) {
      alert(`A subject named ${info.name} already exists!`);
    } else {
      props.addSubject(info);
      props.setKey(`${info.name}`);
      props.handleClose();
    }
    setInfo({
      name: "",
    });
  };

  return (
    <Container className="Button-container">
      <Row className="justify-content-center">
        <Col md={{ span: 8 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                value={info.name}
                placeholder="subject name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ subjects }) => ({
  subjects,
});

const mapDispatchToProps = {
  addSubject,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectForm);
