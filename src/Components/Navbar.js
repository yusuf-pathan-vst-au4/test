import React, { Component } from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import Link from "@material-ui/core/Link";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ padding: "0px 1rem 0px 0px" }}>
                <Link href="/home" color="inherit">
                  Home
                </Link>
              </Typography>
              <Typography variant="h6" style={{ padding: "0px 1rem 0px 0px" }}>
                <Link href="/tasks" color="inherit">
                  Tasks
                </Link>
              </Typography>
              <Typography variant="h6" style={{ padding: "0px 1rem 0px 0px" }}>
                <Link href="/user" color="inherit">
                  User
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default Navbar;
