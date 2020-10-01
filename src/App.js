import React, { Component } from "react";
import "./App.css";
import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import Square from "./Square";

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
    this.onHit = this.onHit.bind(this);
  }
  onHit(xCoor, yCoor) {
    console.log(xCoor, yCoor);
    this.state.player.gameboard.receiveAttack(xCoor, yCoor);
    console.log(this.state.player.gameboard);
  }
  renderSquare(iindex, jindex) {
    return (
      <Square
        id={"attacks-".concat(jindex + iindex * 10)}
        key={"attacks-".concat(jindex + iindex * 10)}
        xCoor={iindex}
        yCoor={jindex}
        attack={this.state.player.gameboard.attacks[iindex][jindex]}
        ship={this.state.player.gameboard.shipsOnBoard[iindex][jindex]}
        onHitCallback={this.onHit}
      />
    );
  }
  render() {
    console.log("Drawing the gamesquares");
    return (
      <div className="App">
        <div className="play-area">
          <h3>Player:</h3>
          <div className="row">
            {this.renderSquare(0, 0)}
            {this.renderSquare(1, 0)}
            {this.renderSquare(2, 0)}
            {this.renderSquare(3, 0)}
            {this.renderSquare(4, 0)}
            {this.renderSquare(5, 0)}
            {this.renderSquare(6, 0)}
            {this.renderSquare(7, 0)}
            {this.renderSquare(8, 0)}
            {this.renderSquare(9, 0)}
          </div>
          <div className="row">
            {this.renderSquare(0, 1)}
            {this.renderSquare(1, 1)}
            {this.renderSquare(2, 1)}
            {this.renderSquare(3, 1)}
            {this.renderSquare(4, 1)}
            {this.renderSquare(5, 1)}
            {this.renderSquare(6, 1)}
            {this.renderSquare(7, 1)}
            {this.renderSquare(8, 1)}
            {this.renderSquare(9, 1)}
          </div>
          <div className="row">
            {this.renderSquare(0, 2)}
            {this.renderSquare(1, 2)}
            {this.renderSquare(2, 2)}
            {this.renderSquare(3, 2)}
            {this.renderSquare(4, 2)}
            {this.renderSquare(5, 2)}
            {this.renderSquare(6, 2)}
            {this.renderSquare(7, 2)}
            {this.renderSquare(8, 2)}
            {this.renderSquare(9, 2)}
          </div>
        </div>
        <div className="play-area">
          <h3>Enemy:</h3>
          {this.state.enemy.gameboard.shipsOnBoard.map((i, iindex) => (
            <div key={iindex} className="row">
              {i.map((j, jindex) => (
                <Square
                  id={"attacks-".concat(jindex + iindex * 10)}
                  key={"attacks-".concat(jindex + iindex * 10)}
                  attack={this.state.enemy.gameboard.attacks[iindex][jindex]}
                  ship={this.state.enemy.gameboard.shipsOnBoard[iindex][jindex]}
                ></Square>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
