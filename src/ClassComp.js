import React, { Component } from "react";
import "./App.css";

const classStyle = "color:green";
class ClassComp extends Component {
  state = {
    number: this.props.initNumber
  };
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  componentDidUpdate() {
    console.log("%cclass => componentDidUpdate", classStyle);
  }
  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", classStyle);
  }
  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h5>Class Style Component</h5>
        <p>Number : {this.state.number}</p>
        <button
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        >
          random
        </button>
        <p>Date : {this.state.date}</p>
        <button
          onClick={() => {
            this.setState({ date: new Date().toString() });
          }}
        >
          date
        </button>
      </div>
    );
  }
}

export default ClassComp;
