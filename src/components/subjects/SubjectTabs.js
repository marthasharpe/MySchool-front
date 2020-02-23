import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import ResourceCards from '../resources/resourceCards/ResourceCards';
import NewSubject from './NewSubject';
import { getSubjects, getResources } from '../../store/actions/actionCreators';

const SubjectTabs = ({ getSubjects, getResources, subjects }) => {

    React.useEffect(() => {
        getSubjects();
        getResources();
    }, [getSubjects, getResources])

    return (
        <Tabs
            className="justify-content-center"
            style={{marginTop: '1rem'}}
            >
            {subjects.length > 0 ? subjects.map(subject => {
                return (
                    <Tab
                        key={subject._id}
                        eventKey={subject.tab}
                        title={subject.tab}
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
