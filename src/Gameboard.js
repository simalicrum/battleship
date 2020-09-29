const Gameboard = () => {
  let attacks = Array(10).fill(Array(10).fill(false));
  let ships = [];
  const checkShipHit = (xCoor, yCoor) => {
    if (ships.length > 0) {
      if (ships[0].xCoor === xCoor && ships[0].yCoor === yCoor) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const receiveAttack = (xCoor, yCoor) => {
    attacks[xCoor][yCoor] = true;
    return checkShipHit(xCoor, yCoor);
  };
  const placeShip = (Ship, xCoor, yCoor, orientation) => {
    ships.push({
      ship: Ship,
      xCoor: xCoor,
      yCoor: yCoor,
      orientation: orientation,
    });
  };
  return { receiveAttack, placeShip, attacks };
};

export default Gameboard;
