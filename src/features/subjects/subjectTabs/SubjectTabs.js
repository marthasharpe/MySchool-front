import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteSubject } from "store/actions/subjectActions";
import ResourceCard from "features/resources/resourceCard/ResourceCard";
import NewSubjectButton from "../newSubjectButton/NewSubjectButton";
import DeleteSubjectButton from "../deleteSubjectButton/DeleteSubjectButton";
import NewResourceButton from "../../resources/newResourceButton/NewResourceButton";
import "./SubjectTabs.css";

const SubjectTabs = (props) => {
  const [key, setKey] = React.useState("New Subject");

  let resources = props.resources.resourceList;
  let subjects = props.subjects.subjectList;

  return (
    <Tabs
      className="justify-content-center"
      activeKey={key}
      onSelect={(tab) => setKey(tab)}
    >
      <Tab key="New Subject" eventKey="New Subject" title="+ New Subject">
        <Container className="resources-container">
          <NewSubjectButton setKey={setKey} />
        </Container>
      </Tab>
      {subjects.length
        ? subjects
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((subject) => {
              let resourcesInSubject = resources.length
                ? resources.filter(
                    (resource) => resource.subject === subject.name
                  )
                : [];
              return (
                <Tab
                  key={subject._id}
                  eventKey={subject.name}
                  title={subject.name}
                >
                  <Container className="resources-container">
                    {resourcesInSubject.length ? (
                      resourcesInSubject.map((resource) => {
                        return <ResourceCard resource={resource} />;
                      })
                    ) : (
                      <div style={{ margin: 50 }}>
                        <h5>You have no resources saved.</h5>
                        <NewResourceButton />
                        <DeleteSubjectButton
                          deleteSubject={props.deleteSubject}
                          subjectId={subject._id}
                          setKey={setKey}
                        />
                      </div>
                    )}
                  </Container>
                </Tab>
              );
            })
        : null}
    </Tabs>
  );
};

const mapStateToProps = ({ subjects, resources }) => ({
  subjects,
  resources,
});

const mapDispatchToProps = {
  deleteSubject,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectTabs);
