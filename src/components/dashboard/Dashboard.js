import React from 'react';
import './Dashboard.css';
import SideTabs from '../sideTabs/SideTabs';
import { connect } from 'react-redux';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';
import { Container } from 'react-bootstrap';

const Dashboard = ({ getSubjects, getResources }) => {

  React.useEffect(() => {
      getSubjects();
      getResources();
  }, [getResources, getSubjects])

    return (
        <Container>
          <SideTabs />
        </Container>
    )
}

const mapStateToProps = ({ auth }) => ({
  auth
})

const mapDispatchToProps = ({
  getSubjects,
  getResources
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);