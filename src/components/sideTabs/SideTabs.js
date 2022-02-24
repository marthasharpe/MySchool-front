import React from "react";
import "./SideTabs.css";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import SubjectTabs from "features/subjects/subjectTabs/SubjectTabs";
import Dashboard from "features/dashboard/Dashboard";
import ResourceList from "features/resources/resourceList/ResourceList";

const SideTabs = () => {
  return (
    <Tab.Container defaultActiveKey="dashboard">
      <Row>
        <Col sm={3} id="sidetabs-container">
          <Nav className="flex-column">
            <Nav.Item className="sidetabs-link">
              <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidetabs-link">
              <Nav.Link eventKey="resources">Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidetabs-link">
              <Nav.Link eventKey="subjects">Subjects</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} id="sidetabs-container">
          <Tab.Content>
            <Tab.Pane eventKey="dashboard">
              <Dashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="resources">
              <ResourceList />
            </Tab.Pane>
            <Tab.Pane eventKey="subjects">
              <SubjectTabs />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default SideTabs;
