import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Login } from './components/Login';
import { Students } from './components/Students';
import { Teachers } from './components/Teachers';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

const App = () => 
  <>
    <Router>
      <NavigationBar />
      {/* <Jumbotron /> */}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/students" component={Students}/>
          <Route path="/teachers" component={Teachers}/>
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  </>


export default App;
