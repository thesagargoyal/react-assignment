import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About'
import { Switch, Route,Redirect } from 'react-router';
import Navbar from "./Navbar";

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/about" exact component={About} />
        <Route exact path="/contact" exact component={Contact} />
        <Route exact path="/service" exact component={Services} />
        <Redirect to="/" />
      </Switch>
    </>
  );

}

export default App;