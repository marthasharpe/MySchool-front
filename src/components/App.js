import React from 'react';
import AppBar from './navbar/AppBar';
import AppTabs from './AppTabs';
import Home from './Home';
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
        <Route path="/subjects" component={AppTabs} />
      </Switch>
    </Router>
  );
}

export default App;
