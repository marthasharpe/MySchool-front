import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import ResourceCards from '../resources/ResourceCards';
import { connect } from 'react-redux';
import NewSubject from './NewSubject';
import { getData } from '../../actions/actionCreators';

const SubjectTabs = ({ getData, subjects }) => {

    React.useEffect(() => {
        getData();
    }, [getData])

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
                            <Col md={{span: 5}} style={{marginTop: 20}}>
                                <h1>Other Info</h1>
                            </Col>
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
    getData
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectTabs);
