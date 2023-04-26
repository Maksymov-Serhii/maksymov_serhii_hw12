import React from "react";
import "./Counter.css"

class Counter extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(currProps) {
    return currProps.count !== this.props.count;
  }

  handleClick(k) {
    k === 1
      ? this.props.setCount(this.props.count + 1)
      : this.props.setCount(this.props.count - 1);
  }

  render() {

    console.log("RENDER");

    return (
      <div className="count-component">
        <h3>Count component</h3>
        <div className="wrapper">
          <button className="count-button" onClick={() => this.handleClick(1)}>+</button>
          <p>Count: {this.props.count}</p>
          <button className="count-button" onClick={() => this.handleClick(-1)}>-</button>
        </div>
      </div>
    )
  }
}

export default Counter;
