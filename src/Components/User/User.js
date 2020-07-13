import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";
import Navbar from "../Navbar";

class User extends Component {
  state = {
    changepassword: false,
    username: "",
    password: "",
  };

  componentDidMount() {
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("password");
    if (!username || !password) {
      return window.location.replace("/");
    }
    if (username && password) {
      this.setState({
        username: username,
        password: password,
        loggedin: true,
      });
    }
  }

  Login = (e) => {
    window.localStorage.setItem("username", this.state.username);
    window.localStorage.setItem("password", this.state.password);
    this.setState({
      loggedin: true,
    });
  };

  HandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  PasswordChange = () => {
    this.setState({
      changepassword: true,
      password: "",
    });
  };

  Save = () => {
    window.localStorage.setItem("password", this.state.password);
    this.setState({ changepassword: false });
  };

  Logout = () => {
    this.setState({
      loggedin: false,
      changepassword: false,
    });
    window.localStorage.clear();
    window.location.replace("/");
  };

  render() {
    if (!this.state.changepassword) {
      return (
        <div>
          <Navbar />
          <div className="user">
            <Input
              type="text"
              id="standard-basic"
              label="Standard"
              readOnly="true"
              fullWidth="true"
              value={this.state.username}
            />
            <br />
            <br />
            <Input
              type="password"
              id="standard-basic"
              label="Standard"
              readOnly="true"
              fullWidth="true"
              value={this.state.password}
            />
            <br />
            <br />
            <Button
              color="secondary"
              variant="contained"
              style={{ marginRight: "2rem" }}
              onClick={() => this.PasswordChange()}
            >
              Change Password
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                this.Logout();
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      );
    }
    if (this.state.changepassword) {
      return (
        <div>
          <Navbar />
          <div className="user">
            <Input
              type="text"
              id="standard-basic"
              label="Standard"
              fullWidth="true"
              value={this.state.username}
              name="username"
            />
            <br />
            <br />
            <Input
              type="password"
              id="standard-basic"
              label="Standard"
              required
              placeholder="Password"
              fullWidth="true"
              value={this.state.password}
              name="password"
              onChange={(event) => {
                this.HandleChange(event);
              }}
            />
            <br />
            <br />
            <Button
            type = "submit"
              color="secondary"
              variant="contained"
              style={{ marginRight: "2rem" }}
              onClick={() => this.Save()}
            >
              Save Password
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                this.Logout();
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default User;
