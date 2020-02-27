import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ResourceCards from '../resourceCards/ResourceCards';
import NewSubject from '../newSubject/NewSubject';
import './SubjectTabs.css';

const SubjectTabs = (props) => {
    return (
        <Container>
            <Tabs
                className="justify-content-center"
                style={{marginTop: '1rem'}}
                >
                {props.subjects.length > 0 ? props.subjects.sort(
                    (a, b) => a.name > b.name ? 1 : -1)
                    .map(subject => {
                    return (
                        <Tab
                            key={subject._id}
                            eventKey={subject.name}
                            title={subject.name}
                            >
                            <ResourceCards subject={subject}/>
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

export default connect(mapStateToProps)(SubjectTabs);
