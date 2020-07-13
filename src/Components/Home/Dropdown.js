import React, { Component } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

class Dropdown extends Component {
  state = {
    dropvalue: "Diseases",
  };

  HandleChange = (event) => {
    this.props.select(event.target.value);
    this.setState({
      dropvalue: event.target.value,
    });
  };

  render() {
    return (
      <div className="dropdown">
        <FormControl style={{ margin: "theme.spacing(1)", minWidth: 130 }}>
          <InputLabel>Select Disease</InputLabel>
          <Select value={this.state.dropvalue} onChange={this.HandleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="covid">Covid 19</MenuItem>
            <MenuItem value="spanishflu">Spanish Flu</MenuItem>
            <MenuItem value="dengue">Dengue </MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default Dropdown;
