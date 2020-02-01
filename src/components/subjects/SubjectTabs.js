import React from 'react';
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import ResourceCards from '../resources/ResourceCards';
import { connect } from 'react-redux';
import NewSubject from './NewSubject';

const SubjectTabs = (props) => {

    return (
        <Tabs
            className="justify-content-center"
            style={{marginTop: '1rem'}}
            >
            {props.subjects.length > 0 ? props.subjects.map(subject => {
                return (
                    <Tab
                        key={subject.tab}
                        eventKey={subject.tab}
                        title={subject.tab}
                        >
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={{span: 6}}>
                                    <ResourceCards subject={subject}/>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                )
            }) : null}
            <Tab
                key="New Subject"
                eventKey="New Subject"
                title="+ New Subject"
                >
                <NewSubject />
            </Tab>
        </Tabs>
    )
}

const mapStateToProps = ({subjects}) => ({
    subjects
})

export default connect(mapStateToProps)(SubjectTabs);
