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
  Route,
} from "react-router-dom";

const App = ({ getResources, getSubjects }) => {

  const token = sessionStorage.getItem('token');
  if (token) {
    getSubjects(token);
    getResources(token);
  }

  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/subjects" component={SubjectTabs} />
        <Route path="/login" component={AuthForm} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = ({
  getSubjects,
  getResources
})

export default connect(null, mapDispatchToProps)(App);
