import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Quote from './Quote';
import Home from './Home';
import App from './App';

const NewApp = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </main>
);

export default NewApp;
