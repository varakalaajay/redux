import React, { Component } from "react";
import "./style.css";
export default class shop extends Component {
  state = {
    numOfLaptops: 100,
  };
  buyLaptop = () => {
    this.setState({ numOfLaptops: this.state.numOfLaptops - 1 });
  };
  render() {
    return (
      <div>
        <h1 className="title">Welcome to Store</h1>
        <div className="item">
          <p>Dell Laptop</p>
          <p>Stock : {this.state.numOfLaptops}</p>
          <button onClick={this.buyLaptop}>BUY</button>
        </div>
      </div>
    );
  }
}
