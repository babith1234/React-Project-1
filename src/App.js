import "./App.css";
import Plan from "./Plan";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

export default class App extends Component {
  state={
    items:[],
    text:""
  }
  handleChange=(e)=>{
    this.setState({text:e.target.value})
  }
  render() {
    return (
      <div>
        <div className="container-fluid myapp-5">
          <div className="row">
            <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
              <h1 className="text-center">Today's Plan</h1>
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write plan here"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5">Add</button>
                </div>
                <div className="container-fluid">
                  <ul class="list-unstyled row m-5">
                    <Plan />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
