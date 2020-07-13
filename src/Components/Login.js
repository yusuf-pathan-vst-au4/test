import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import App from "../App";
import "../App.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  HandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Login = (e) => {
    e.preventDefault();
    window.localStorage.setItem("username", this.state.username);
    window.localStorage.setItem("password", this.state.password);
    window.location.replace("/home");
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="login">
          <form onSubmit={this.Login}>
            <Input
              type="text"
              id="standard-basic"
              label="Standard"
              placeholder="Username"
              required
              name="username"
              fullWidth="true"
              onChange={(event) => {
                this.HandleChange(event);
              }}
            />
            <br />
            <br />
            <Input
              type="password"
              id="standard-basic"
              label="Standard"
              placeholder="Password"
              required
              name="password"
              fullWidth="true"
              onChange={(event) => {
                this.HandleChange(event);
              }}
            />
            <br />
            <br />
            <Button type="submit" color="primary" variant="outlined">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
