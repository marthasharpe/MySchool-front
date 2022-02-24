import React from "react";
import SubjectTabs from "../subjects/subjectTabs/SubjectTabs";
import Home from "components/home/Home";
import LoginForm from "../authentication/loginForm/LoginForm";
import SignupForm from "../authentication/signupForm/SignupForm";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppBar from "components/appbar/AppBar";

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/subjects">
          <SubjectTabs />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
