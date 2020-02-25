import React from 'react';
import AppBar from '../appbar/AppBar';
import SubjectTabs from '../subjectTabs/SubjectTabs';
import Home from '../home/Home';
import AuthForm from '../authForm/AuthForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
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

export default App;
