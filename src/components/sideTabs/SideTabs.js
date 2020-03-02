import React from 'react';
import './SideTabs.css';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import SubjectTabs from '../subjectTabs/SubjectTabs';

const SideTabs = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="subjects">Subjects</Nav.Link>
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
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default SideTabs;
