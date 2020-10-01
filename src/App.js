import React, { Component } from "react";
import "./App.css";
import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import Square from "./Square";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: Player(Gameboard()),
      enemy: Player(Gameboard()),
    };
    this.state.player.gameboard.placeShip(Ship(2), 8, 2, 1, 0);
    this.state.player.gameboard.placeShip(Ship(3), 5, 5, 0, 1);
    this.state.player.gameboard.placeShip(Ship(3), 2, 6, 0, 1);
    this.state.player.gameboard.placeShip(Ship(4), 8, 6, 0, 1);
    this.state.player.gameboard.placeShip(Ship(5), 0, 0, 1, 0);
    this.state.enemy.gameboard.placeShip(Ship(2), 8, 2, 0, 1);
    this.state.enemy.gameboard.placeShip(Ship(3), 5, 5, 0, 1);
    this.state.enemy.gameboard.placeShip(Ship(3), 2, 6, 1, 0);
    this.state.enemy.gameboard.placeShip(Ship(4), 8, 6, 0, 1);
    this.state.enemy.gameboard.placeShip(Ship(5), 0, 0, 1, 0);
    this.state.player.gameboard.receiveAttack(5, 5);
    this.state.player.gameboard.receiveAttack(5, 6);
    this.state.player.gameboard.receiveAttack(5, 7);
    this.state.player.gameboard.receiveAttack(0, 0);
    this.state.player.gameboard.receiveAttack(1, 0);
    this.state.player.gameboard.receiveAttack(2, 0);
    this.state.player.gameboard.receiveAttack(3, 0);
    this.state.player.gameboard.receiveAttack(8, 2);
    this.state.player.gameboard.receiveAttack(2, 2);
    this.state.player.gameboard.receiveAttack(2, 4);
    this.state.player.gameboard.receiveAttack(8, 4);
    this.state.player.gameboard.receiveAttack(8, 5);
    this.state.player.gameboard.receiveAttack(8, 6);
    this.state.player.gameboard.receiveAttack(4, 9);
    this.state.player.gameboard.receiveAttack(5, 9);
    this.state.player.gameboard.receiveAttack(2, 8);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(xCoor, yCoor) {
    let newTurn = this.state.enemy;
    newTurn.gameboard.receiveAttack(xCoor, yCoor);
    this.setState({ enemy: newTurn });
  }
  renderPlayerSquare(xCoor, yCoor) {
    return (
      <Square
        value={this.state.player.gameboard.attacks[xCoor][yCoor]}
        isShip={this.state.player.gameboard.shipsOnBoard[xCoor][yCoor]}
      />
    );
  }
  renderPlayerRow(yCoor) {
    return (
      <div className="row">
        {arr.map((i) => this.renderPlayerSquare(i, yCoor))}
      </div>
    );
  }
  renderEnemySquare(xCoor, yCoor) {
    let ship = false;
    if (
      this.state.enemy.gameboard.shipsOnBoard[xCoor][yCoor] &&
      this.state.enemy.gameboard.attacks[xCoor][yCoor] === "X"
    ) {
      ship = true;
    }
    return (
      <Square
        value={this.state.enemy.gameboard.attacks[xCoor][yCoor]}
        isShip={ship}
        onClick={() => this.handleClick(xCoor, yCoor)}
      />
    );
  }
  renderEnemyRow(yCoor) {
    return (
      <div className="row">
        {arr.map((i) => this.renderEnemySquare(i, yCoor))}
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <h3>Your Ships:</h3>
        <div className="board">{arr.map((i) => this.renderPlayerRow(i))}</div>
        <h3>Attacks:</h3>
        <div className="board">{arr.map((i) => this.renderEnemyRow(i))}</div>
      </div>
    );
  }
}

export default App;
