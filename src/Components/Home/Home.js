import React, { Component } from "react";
import Navbar from "../Navbar";
import DropDown from "./Dropdown";
import Text from "./Text";

class Home extends Component {
  state = {
    dropdownvalue: "",
  };

  componentDidMount() {
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("password");
    if (!username || !password) {
      return window.location.replace("/");
    }
  }

  SelectChange = (value) => {
    this.setState({ dropdownvalue: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="navbar">
          <DropDown select={this.SelectChange} />
          <Text text={this.state.dropdownvalue} />
        </div>
      </div>
    );
  }
}

export default Home;
