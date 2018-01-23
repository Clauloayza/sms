import React from 'react';
import './index.css';
import Signin from './Login';
import Register from './Signup';
import sms from './sms';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'redux-zero/react';

const App = ({ successLogin, data}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Register} />
        <Route path="/sms" component={sms} />
       </Switch>
    </HashRouter>
  )
}

const mapToProps = ({ successLogin}) => ({ successLogin});
export default connect(mapToProps)(App);
