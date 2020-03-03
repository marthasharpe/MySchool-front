import React from 'react';
import './SideTabs.css';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import NewResource from '../newResource/NewResource';
import Dashboard from '../dashboard/Dashboard';
import { connect } from 'react-redux';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';

const SideTabs = (props) => {
    const { getSubjects, getResources } = props;

    React.useEffect(() => {
        getSubjects();
        getResources();
    }, [getSubjects, getResources]);

    return (
        <Tab.Container defaultActiveKey="dashboard">
            <Row>
                <Col sm={3}>
                    <NewResource />
                    <Nav className="flex-column">
                        <Nav.Item className="sidetab-link">
                            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="sidetab-link">
                            <Nav.Link eventKey="subjects">Subjects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="dashboard">
                            <Dashboard />
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

const mapDispatchToProps = ({
    getSubjects,
    getResources
})
  
export default connect(null, mapDispatchToProps)(SideTabs);
