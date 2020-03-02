import React from 'react';
import './Dashboard.css';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import { connect } from 'react-redux';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';

const Dashboard = ({ getSubjects, getResources, auth }) => {

  React.useEffect(() => {
    // if (auth.loggedIn) {
    //   const userId = auth.user.userId
      getSubjects();
      getResources();
    //}
  }, [getResources, getSubjects])

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