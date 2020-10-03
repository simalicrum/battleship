import React, { Component } from "react";
import { cloneDeep } from "lodash";
import "./App.css";
import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import Square from "./Square";
import Gamelog from "./Gamelog";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: Player(Gameboard()),
      enemy: Player(Gameboard()),
      gamelog: ["Would you like to play a game of Battleship?"],
      initialState: null,
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
    this.state.initialState = cloneDeep(this.state);
    console.log("this.state: ", this.state);
  }
  handleClick(xCoor, yCoor) {
    let xCoorEnemy = Math.floor(Math.random() * 10);
    let yCoorEnemy = Math.floor(Math.random() * 10);
    while (
      this.state.player.gameboard.attacks[xCoorEnemy][yCoorEnemy] === "X"
    ) {
      xCoorEnemy = Math.floor(Math.random() * 10);
      yCoorEnemy = Math.floor(Math.random() * 10);
    }
    let newTurn = cloneDeep(this.state);
    newTurn.enemy.gameboard.receiveAttack(xCoor, yCoor);
    if (this.state.enemy.gameboard.allShipsSunk()) {
      console.log("You won the game!");
      console.log(this.state.initialState);
      newTurn = cloneDeep(this.state.initialState);
    }
    newTurn.player.gameboard.receiveAttack(xCoorEnemy, yCoorEnemy);
    this.setState({ state: newTurn });
  }

  renderPlayerSquare(xCoor, yCoor) {
    return (
      <Square
        value={this.state.player.gameboard.attacks[xCoor][yCoor]}
        isShip={this.state.player.gameboard.shipsOnBoard[xCoor][yCoor]}
        key={"friend-sqaure-" + (xCoor + yCoor * 10)}
      />
    );
  }
  renderPlayerRow(yCoor) {
    return (
      <div key={"player-row-" + yCoor} className="row">
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
        onClick={
          this.state.enemy.gameboard.attacks[xCoor][yCoor] === ""
            ? () => this.handleClick(xCoor, yCoor)
            : () => {}
        }
        key={"enemy-sqaure-" + (xCoor + yCoor * 10)}
      />
    );
  }
  renderEnemyRow(yCoor) {
    return (
      <div key={"enemy-row-" + yCoor} className="row">
        {arr.map((i) => this.renderEnemySquare(i, yCoor))}
      </div>
    );
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h3>Your Ships:</h3>
        <div className="board">{arr.map((i) => this.renderPlayerRow(i))}</div>
        <h3>Attacks:</h3>
        <div className="board">{arr.map((i) => this.renderEnemyRow(i))}</div>
        <Gamelog gamelog={this.state.gamelog} />
      </div>
    );
  }
}

export default App;
