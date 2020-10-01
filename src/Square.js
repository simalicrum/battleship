import React, { Component } from "react";

class Square extends Component {
  constructor() {
    super();
    this.sendClick = this.sendClick.bind(this);
  }
  sendClick() {
    this.props.onHitCallback(this.props.xCoor, this.props.yCoor);
  }
  render() {
    let ship = "";
    if (this.props.ship) {
      ship = <span className="ship-marker"></span>;
    }
    console.log("Redrawing the sqaures");
    console.log(this.props.attack);
    return (
      <div id={this.props.id} className="square" onClick={this.sendClick}>
        {this.props.attack}
        {ship}
      </div>
    );
  }
}

export default Square;
