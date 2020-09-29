const Gameboard = () => {
  let attacks = Array(10).fill(Array(10).fill(false));
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
    attacks[xCoor][yCoor] = true;
    return checkShipHit(xCoor, yCoor);
  };
  const placeShip = (Ship, xCoor, yCoor, xOri, yOri) => {
    ships.push({
      ship: Ship,
      xCoor: xCoor,
      yCoor: yCoor,
      xOri: xOri,
      yOri: yOri,
    });
  };
  const allShipsSunk = () => {
    return ships.every((i) => i.ship.isSunk());
  };
  return { receiveAttack, placeShip, attacks, ships, allShipsSunk };
};

export default Gameboard;
