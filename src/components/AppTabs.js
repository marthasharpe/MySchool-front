import React from 'react';
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import ResourceCards from './ResourceCards';
import { setSubjects } from '../actions/actionCreators';
import { connect } from 'react-redux';
import NewResource from './NewResource';

const AppTabs = (props) => {

    // React.useEffect(() => {
    //     props.setSubjects();
    //     // db.collection('subjects').get()
    //     //     .then(snapshot => snapshot.docs.forEach(doc => {
    //     //         console.log(doc.data())
    //     //     }))
    // }, [props]);

    return (
        <Tabs
            className="justify-content-center"
            style={{marginTop: '1rem'}}
            >
            {props.subjects.map(subject => {
                return (
                    <Tab
                        key={subject.tab}
                        eventKey={subject.tab}
                        title={subject.tab}
                        >
                        <Container>
                            <Row
                                style={{marginTop: "2rem"}}
                                className="justify-content-center"
                                >
                                <NewResource />
                            </Row>
                            <Row className="justify-content-center">
                                <Col md={{span: 6}}>
                                    <ResourceCards subject={subject}/>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                )
            })}
            <Tab title="+ New Subject"/>
        </Tabs>
    )
}

const mapStateToProps = ({subjects}) => ({
    subjects
})

const mapDispatchToProps = {
    setSubjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTabs);
