import React, { Component } from "react";
import ReactDOM from "react-dom";
import { safeLocalStorage } from "../../lib/index";

const TOKEN_KEY = "@safe-storage/token";

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleAdd() {
    safeLocalStorage.setItem(TOKEN_KEY, this.state.value);
  }

  handleGet() {
    alert(safeLocalStorage.getItem(TOKEN_KEY));
  }

  handleRemove() {
    safeLocalStorage.removeItem(TOKEN_KEY);
  }

  render() {
    return (
      <div>
        <h3>safe-storage demo</h3>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add to localStorage</button>
        <button onClick={this.handleGet}>Get from localStorage</button>
        <button onClick={this.handleRemove}>Remove from localStorage</button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
