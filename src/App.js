import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Tasks from "./Components/Tasks/Tasks";
import User from "./Components/User/User";
import Login from "./Components/Login.js";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/tasks" component={Tasks}></Route>
            <Route exact path="/user" component={User}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
