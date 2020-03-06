import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ResourceCards from '../resourceCards/ResourceCards';
import NewSubject from '../newSubject/NewSubject';
import './SubjectTabs.css';

const SubjectTabs = (props) => {
    const [ key, setKey ] = React.useState('All');
    
    return (
        <Container>
            <Tabs
                className="justify-content-center"
                activeKey={key}
                onSelect={tab => setKey(tab)}
                style={{marginTop: '1rem'}}
                >
                <Tab
                    key="All"
                    eventKey="All"
                    title="All"
                    >
                    {/* <ResourceCards /> */}
                    <h1> All resources </h1>
                </Tab>
                {props.subjects.subjectList.length > 0 ? props.subjects.subjectList.sort(
                    (a, b) => a.name > b.name ? 1 : -1)
                    .map(subject => {
                    return (
                        <Tab
                            key={subject._id}
                            eventKey={subject.name}
                            title={subject.name}
                            >
                            <ResourceCards subject={subject} setKey={setKey}/>
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
