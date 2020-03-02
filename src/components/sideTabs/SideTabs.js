import React from 'react';
import './SideTabs.css';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import ResourceModal from '../resourceModal/ResourceModal';

const SideTabs = () => {
    return (
        <Tab.Container defaultActiveKey="dashboard">
            <Row>
                <Col sm={3}>
                    <ResourceModal />
                    <Nav className="flex-column">
                        <Nav.Item className="sidetab-link">
                            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="sidetab-link">
                            <Nav.Link eventKey="subjects">Subjects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="sidetab-link">
                            <Nav.Link eventKey="search">Search</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="dashboard">
                            <p>dashboard</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="subjects">
                            <SubjectTabs />
                        </Tab.Pane>
                        <Tab.Pane eventKey="search">
                            <p>Search</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default SideTabs;
