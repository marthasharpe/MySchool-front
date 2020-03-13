import React from 'react';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import Home from '../home/Home';
import LoginForm from '../loginForm/LoginForm';
import SignupForm from '../signupForm/SignupForm';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import AppBar from '../appbar/AppBar';

const App = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <AppBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/subjects"><SubjectTabs /></Route>
        <Route path="/login"><LoginForm /></Route>
        <Route path="/signup"><SignupForm /></Route>
      </Switch>
    </Router>
  );
}

export default App;
