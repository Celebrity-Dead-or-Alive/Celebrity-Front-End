import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CelebrityList from "./components/CelebrityList";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Celebrity Dead or Alive</h1>
      <CelebrityList />
      <div className="main-page">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/celebrity" component={CelebrityList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
