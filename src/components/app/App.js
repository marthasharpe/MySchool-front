import React from 'react';
import AppBar from '../appbar/AppBar';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import Home from '../home/Home';
import LoginForm from '../loginForm/LoginForm';
import SignupForm from '../signupForm/SignupForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
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
