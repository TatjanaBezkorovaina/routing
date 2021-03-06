import React from "react";
import "./clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="time__wrapper">
        <h2 className="time">Time {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
