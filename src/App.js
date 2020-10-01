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
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(xCoor, yCoor) {
    let newTurn = this.state.enemy;
    newTurn.gameboard.receiveAttack(xCoor, yCoor);
    this.setState({ enemy: newTurn });
    console.log("You have attacked position " + xCoor + ", " + yCoor);
    if (this.state.enemy.gameboard.checkShipHit(xCoor, yCoor)) {
      console.log("It's a hit!");
    } else {
      console.log("It's a miss!");
    }
    if (this.state.enemy.gameboard.allShipsSunk()) {
      console.log("You won! Let's play again!");
    }
    this.enemyTurn();
  }
  enemyTurn() {
    let newTurn = this.state.player;
    const xCoor = Math.floor(Math.random() * 10);
    const yCoor = Math.floor(Math.random() * 10);
    newTurn.gameboard.receiveAttack(xCoor, yCoor);
    this.setState({ player: newTurn });
    console.log("The computer has attacked position " + xCoor + ", " + yCoor);
    if (this.state.player.gameboard.checkShipHit(xCoor, yCoor)) {
      console.log("It's a hit!");
    } else {
      console.log("It's a miss!");
    }
    if (this.state.player.gameboard.allShipsSunk()) {
      console.log("You lost! Let's play again!");
    }
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
    return (
      <Square
        value={this.state.enemy.gameboard.attacks[xCoor][yCoor]}
        isShip={
          this.state.enemy.gameboard.shipsOnBoard[xCoor][yCoor] &&
          this.state.enemy.gameboard.attacks[xCoor][yCoor] === "X"
        }
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
