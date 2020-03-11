import React from 'react';
import { Tabs, Tab, Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteSubject } from '../../store/actions/subjectActions';
import ResourceCards from '../resourceCards/ResourceCards';
import NewSubject from '../newSubject/NewSubject';
import './SubjectTabs.css';

const SubjectTabs = (props) => {
    const [ key, setKey ] = React.useState('All');

    let resources = props.resources.resourceList;
    let subjects = props.subjects.subjectList;

    const handleDeleteSubject = (id) => {
        props.deleteSubject(id);
        setKey('All');
    }

    return (
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
                <Container className="resources-container">
                    {resources.length ? resources.map(resource => {
                        return <ResourceCards resource={resource}/>
                    }) : (
                        <div style={{margin: 50}}>
                            <h5>You have no resources saved.</h5>
                        </div>
                    )}
                </Container>
            </Tab>
            {subjects.length ? subjects.sort((a, b) => a.name > b.name ? 1 : -1)
                .map(subject => {
                    let resourcesInSubject = resources.length ?   resources.filter(resource => resource.subject === subject.name) : [];
                return (
                    <Tab
                        key={subject._id}
                        eventKey={subject.name}
                        title={subject.name}
                        >
                        <Container className="resources-container">
                            { resourcesInSubject.length ?
                            resourcesInSubject.map(resource => {
                                return <ResourceCards resource={resource}/>
                            }) : (
                                <div style={{margin: 50}}>
                                    <h5>You have no resources saved.</h5>
                                    <Button
                                        onClick={() => handleDeleteSubject(subject._id)}
                                        variant="success"
                                        >
                                        Delete Subject
                                    </Button>
                                </div>
                            )}
                        </Container>
                    </Tab>
                )
            }) : null}
            <Tab
                key="New Subject"
                eventKey="New Subject"
                title="+ New Subject"
                >
                <NewSubject setKey={setKey}/>
            </Tab>
        </Tabs>
    )
}

const mapStateToProps = ({ subjects, resources }) => ({
    subjects,
    resources
})

const mapDispatchToProps = ({
    deleteSubject
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectTabs);
