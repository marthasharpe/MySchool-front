import React from 'react';
import './Dashboard.css';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import { connect } from 'react-redux';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';

const Dashboard = (props) => {

  const token = sessionStorage.getItem('token');
  if (token) {
    props.getSubjects(token);
    props.getResources(token);
  }

    return (
        <div>
            <SubjectTabs />
        </div>
    )
}
const mapDispatchToProps = ({
  getSubjects,
  getResources
})

export default connect(null, mapDispatchToProps)(Dashboard);