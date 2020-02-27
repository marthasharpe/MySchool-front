import React from 'react';
import AppBar from '../appbar/AppBar';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import Home from '../home/Home';
import AuthForm from '../authForm/AuthForm';
import { connect } from 'react-redux';
import { getSubjects } from '../../store/actions/subjectActions';
import { getResources } from '../../store/actions/resourceActions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {

  const token = sessionStorage.getItem('token');
  if (token) {
    props.getSubjects(token);
    props.getResources(token);
  }

  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/subjects"><SubjectTabs /></Route>
        <Route path="/login"><AuthForm /></Route>
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = ({
  getSubjects,
  getResources
})

export default connect(null, mapDispatchToProps)(App);
