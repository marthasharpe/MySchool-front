import React from 'react';
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ResourceCards from '../resourceCards/ResourceCards';
import NewSubject from '../newSubject/NewSubject';
import Dashboard from '../dashboard/Dashboard';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';
import './SubjectTabs.css';

const SubjectTabs = ({ getSubjects, getResources, subjects }) => {

    React.useEffect(() => {
        getSubjects();
        getResources();
    }, [getSubjects, getResources])

    return (
        <Container>
        <Tabs
            className="justify-content-center"
            style={{marginTop: '1rem'}}
            >
            <Tab
                key="Dashboard"
                eventKey="Dashboard"
                title="Dashboard"
                >
                <Dashboard />
            </Tab>
            {subjects.length > 0 ? subjects.sort(
                (a, b) => a.name > b.name ? 1 : -1)
                .map(subject => {
                return (
                    <Tab
                        key={subject._id}
                        eventKey={subject.name}
                        title={subject.name}
                        >
                        <Row className="justify-content-center">                        
                            <Col md={{span: 5}}>
                                <ResourceCards subject={subject}/>
                            </Col>
                            {/* <Col md={{span: 5}} style={{marginTop: 20}}>
                                <h1>Other Info</h1>
                            </Col> */}
                        </Row>
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
        </Container>
    )
}

const mapStateToProps = ({ subjects }) => ({
    subjects
})

const mapDispatchToProps = ({
    getSubjects,
    getResources
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectTabs);
