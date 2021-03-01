const Gameboard = () => {
  const attacks = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];
  const shipsOnBoard = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ];
  let ships = [];
  const checkShipHit = (xCoor, yCoor) => {
    for (let j of ships) {
      for (let i = 0; i < j.ship.length; i++) {
        if (xCoor === j.xCoor + i * j.xOri && yCoor === j.yCoor + i * j.yOri) {
          j.ship.hit(i);
          return true;
        }
      }
    }
    return false;
  };
  const receiveAttack = (xCoor, yCoor) => {
    attacks[xCoor][yCoor] = "X";
    //    return checkShipHit(xCoor, yCoor);
  };
  const placeShip = (Ship, xCoor, yCoor, xOri, yOri) => {
    ships.push({
      ship: Ship,
      xCoor: xCoor,
      yCoor: yCoor,
      xOri: xOri,
      yOri: yOri,
    });
    for (let i = 0; i < Ship.length; i++) {
      shipsOnBoard[xCoor + i * xOri][yCoor + i * yOri] = true;
    }
  };
  const allShipsSunk = () => {
    return ships.every((i) => i.ship.isSunk());
  };
  return {
    receiveAttack,
    placeShip,
    attacks,
    ships,
    allShipsSunk,
    shipsOnBoard,
    checkShipHit,
  };
};

export default Gameboard;
