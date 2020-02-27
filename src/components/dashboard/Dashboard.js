import React from 'react';
import './Dashboard.css';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import { connect } from 'react-redux';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';

const Dashboard = (props) => {

  if (props.auth.loggedIn) {
    props.getSubjects();
    props.getResources();
  }

    return (
        <div>
          <SubjectTabs />
        </div>
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