import React from 'react';
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import ResourceCards from '../resources/ResourceCards';
import { setSubjects, setResources } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import NewSubject from './NewSubject';

const SubjectTabs = (props) => {

    const setSubjects = props.setSubjects;
    const setResources = props.setResources;
    // React.useEffect(() => {
    //     props.setSubjects();
    //     // db.collection('subjects').get()
    //     //     .then(snapshot => snapshot.docs.forEach(doc => {
    //     //         console.log(doc.data())
    //     //     }))
    // }, [props]);
    React.useEffect(() => {
        setSubjects();
        setResources();
    }, [setSubjects, setResources]);

    return (
        <Tabs
            className="justify-content-center"
            style={{marginTop: '1rem'}}
            >
            {props.subjects ? props.subjects.map(subject => {
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

const mapDispatchToProps = {
    setSubjects,
    setResources,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectTabs);
