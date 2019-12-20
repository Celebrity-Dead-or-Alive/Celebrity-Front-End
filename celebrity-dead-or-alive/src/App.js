import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-page">
      <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
