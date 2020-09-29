const Player = (Gameboard) => {
  let gameboard = Gameboard;
  const takeTurn = (enemyGameboard, xCoor, yCoor) => {
    return enemyGameboard.receiveAttack(xCoor, yCoor);
  };
  return { gameboard, takeTurn };
};

export default Player;
