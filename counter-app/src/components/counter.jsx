import React, { Component } from "react";

class CounterComponent extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  handleDecrement = () => {
    this.setState({ value: this.props.counter.value - 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2 "
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2 "
        >
          {" "}
          -{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2 "
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default CounterComponent;
