import React from 'react';
import './index.css';
import Signin from './Login';
import Register from './Signup';
import smsv from './smsv';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'redux-zero/react';

const App = ({ successLogin}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Register} />
        <Route path="/smsv" component={smsv} />
       </Switch>
    </HashRouter>
  )
}

const mapToProps = ({ successLogin}) => ({ successLogin});
export default connect(mapToProps)(App);
