/* eslint-disable*/

import React, { Component, Fragment } from "react";
import {
  List,
  ListItem,
  Typography,
  Button,
  Divider,
  Input,
} from "@material-ui/core";
import axios from "axios";
import Navbar from "../Navbar";
import "../../App.css";

class Tasks extends Component {
  state = {
    todos: "",
    title: "",
    completed: "",
    add: false,
  };

  async componentDidMount() {
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("password");
    if (!username || !password) {
      return window.location.replace("/");
    }
    const todos = await axios.get("http://jsonplaceholder.typicode.com/todos");
    const newarr = todos.data.slice(0, 3);
    this.setState({ todos: newarr });
  }

  Delete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  Add = () => {
    this.setState({ add: true });
  };

  HandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  AddTask = (e) => {
    e.preventDefault();
    const todos = this.state.todos;
    const newarr = {
      id: todos.length + 1,
      title: this.state.title,
      completed: this.state.completed,
    };
    todos.push(newarr);
    this.setState({
      todos,
      title: "",
      completed: "",
      add: false,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="tasks">
          {this.state.todos &&
            this.state.todos.map((todo) => (
              <Fragment>
                <List>
                  <ListItem>
                    <Typography variant="h6" style={{ marginRight: "7rem" }}>
                      {todo.id}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ width: "18rem", marginRight: "9rem" }}
                    >
                      {todo.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ width: "18rem", marginRight: "5rem" }}
                    >
                      {todo.completed.toString()}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        this.Delete(todo.id);
                      }}
                    >
                      Delete
                    </Button>
                  </ListItem>
                  <Divider />
                </List>
              </Fragment>
            ))}
          <br />
          <br />

          {this.state.add && (
            <div>
              <form onSubmit={this.AddTask}>
                <Input
                  type="text"
                  id="standard-basic"
                  label="Standard"
                  placeholder="Title"
                  required
                  name="title"
                  onChange={(event) => {
                    this.HandleChange(event);
                  }}
                />

                <Input
                  style={{ marginLeft: "3rem" }}
                  type="text"
                  id="standard-basic"
                  label="Standard"
                  placeholder="Completed"
                  required
                  name="completed"
                  onChange={(event) => {
                    this.HandleChange(event);
                  }}
                />
                <br />
                <br />
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  color="inherit"
                >
                  Submit
                </Button>
                <br />
                <br />
              </form>
            </div>
          )}

          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              this.Add();
            }}
          >
            Add Task
          </Button>
        </div>
      </div>
    );
  }
}

export default Tasks;
