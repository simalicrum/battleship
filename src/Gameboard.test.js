import Gameboard from "./Gameboard";
import Ship from "./Ship";

test("Attack at 0,0 reports an attack", () => {
  let gameboard = Gameboard();
  gameboard.receiveAttack(0, 0);
  expect(gameboard.attacks[0][0]).toEqual(true);
});

test("Attack at 0,9 reports an attack", () => {
  let gameboard = Gameboard();
  gameboard.receiveAttack(0, 9);
  expect(gameboard.attacks[0][9]).toEqual(true);
});

test("Attack at 9,0 reports an attack", () => {
  let gameboard = Gameboard();
  gameboard.receiveAttack(9, 0);
  expect(gameboard.attacks[9][0]).toEqual(true);
});

test("Attack at 5,5 reports an attack", () => {
  let gameboard = Gameboard();
  gameboard.receiveAttack(5, 5);
  expect(gameboard.attacks[5][5]).toEqual(true);
});

test("Attack at 0,0 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0, 1, 0);
  const shipHit = gameboard.receiveAttack(0, 0);
  expect(shipHit).toBe(true);
});

test("Attack at 9,0 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 9, 0, 1, 0);
  const shipHit = gameboard.receiveAttack(9, 0);
  expect(shipHit).toBe(true);
});

test("Attack at 0,9 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 9, 1, 0);
  const shipHit = gameboard.receiveAttack(0, 9);
  expect(shipHit).toBe(true);
});

test("Attack at 5,5 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 5, 5, 1, 0);
  const shipHit = gameboard.receiveAttack(5, 5);
  expect(shipHit).toBe(true);
});

test("Attack at 0,0 on a ship of 3 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 0, 0, 1, 0);
  const shipHit = gameboard.receiveAttack(0, 0);
  expect(shipHit).toBe(true);
});

test("Attack at 0,0 without a ship present reports a miss", () => {
  let gameboard = Gameboard();
  const shipHit = gameboard.receiveAttack(0, 0);
  expect(shipHit).toBe(false);
});

test("Attack at 9,0 without a ship present reports a miss", () => {
  let gameboard = Gameboard();
  const shipHit = gameboard.receiveAttack(9, 0);
  expect(shipHit).toBe(false);
});

test("Attack at 0,9 without a ship present reports a miss", () => {
  let gameboard = Gameboard();
  const shipHit = gameboard.receiveAttack(0, 9);
  expect(shipHit).toBe(false);
});

test("Attack at 5,5 without a ship present reports a miss", () => {
  let gameboard = Gameboard();
  const shipHit = gameboard.receiveAttack(5, 5);
  expect(shipHit).toBe(false);
});

test("Attack at 1,0 on a ship of 1 length at 0,0 reports a miss", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0, 1, 0);
  const shipHit = gameboard.receiveAttack(1, 0);
  expect(shipHit).toBe(false);
});

test("Attack at 1,0 on a ship of 3 length and horizontal orintation at 0,0 reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 0, 0, 1, 0);
  const shipHit = gameboard.receiveAttack(1, 0);
  expect(shipHit).toBe(true);
});

test("Attack at 0,1 on a ship of 3 length and vertical orintation at 0,0 reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 0, 0, 0, 1);
  const shipHit = gameboard.receiveAttack(0, 1);
  expect(shipHit).toBe(true);
});

test("Attack at 6,5 on a ship of 3 length and horizontal orintation at 5,5 reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 1, 0);
  const shipHit = gameboard.receiveAttack(6, 5);
  expect(shipHit).toBe(true);
});

test("Attack at 5,6 on a ship of 3 length and vertical orintation at 5,5 reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  const shipHit = gameboard.receiveAttack(5, 6);
  expect(shipHit).toBe(true);
});

test("Attack at 0,0 on a ship of 3 length and vertical orintation at 5,5 reports a miss", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  const shipHit = gameboard.receiveAttack(0, 0);
  expect(shipHit).toBe(false);
});

test("Attack at 9, 9 on a ship of 3 length and vertical orintation at 5,5 reports a miss", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  const shipHit = gameboard.receiveAttack(9, 9);
  expect(shipHit).toBe(false);
});

test("Attacks at 5,5 and 6,5 on a ship of 3 length and horizontal orintation at 5,5 doesn't sink ship", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(6, 5);
  expect(gameboard.ships[0].ship.isSunk()).toBe(false);
});

test("Attacks at 5,5 and 7,5 on a ship of 3 length and horizontal orintation at 5,5 doesn't sink ship", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(7, 5);
  expect(gameboard.ships[0].ship.isSunk()).toBe(false);
});

test("Attacks at 5,5 6,5 and 7,5 on a ship of 3 length and horizontal orintation at 5,5 sinks ship", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(6, 5);
  gameboard.receiveAttack(7, 5);
  expect(gameboard.ships[0].ship.isSunk()).toBe(true);
});

test("Attacks at 5,5 5,6 and 5,7 on a ship of 3 length and horizontal orintation at 5,5 sinks ship", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  expect(gameboard.ships[0].ship.isSunk()).toBe(true);
});

test("With two ships on the board, attacks at 5,5 5,6 and 5,7 on a ship of 3 length and horizontal orintation at 5,5 sinks ship 0", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  expect(gameboard.ships[0].ship.isSunk()).toBe(true);
});

test("All ships are not sunk on a board with one ship that is not sunk", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(6, 5);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("All ships are sunk on a board with one ship that is sunk", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(6, 5);
  gameboard.receiveAttack(7, 5);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("With two ships on the board, all ships are not sunk when only one ship is sunk", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("With two ships on the board, all ships are sunk when both ships are sunk", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  gameboard.receiveAttack(4, 0);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("With two ships on the board, all ships are not sunk when a ship is missing one hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("All ships are not sunk with a complete gameboard with various attacks on the board and two ships sunk", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.placeShip(Ship(2), 8, 2, 0, 1);
  gameboard.placeShip(Ship(3), 2, 6, 1, 0);
  gameboard.placeShip(Ship(4), 8, 6, 0, 1);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  gameboard.receiveAttack(8, 2);
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(2, 4);
  gameboard.receiveAttack(8, 4);
  gameboard.receiveAttack(8, 5);
  gameboard.receiveAttack(8, 6);
  gameboard.receiveAttack(4, 9);
  gameboard.receiveAttack(5, 9);
  gameboard.receiveAttack(2, 8);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("All ships are not sunk with a complete gameboard with various attacks on the board and one hit missing", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 8, 2, 1, 0);
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(3), 2, 6, 0, 1);
  gameboard.placeShip(Ship(4), 8, 6, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  gameboard.receiveAttack(4, 0);
  gameboard.receiveAttack(8, 2);
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(2, 4);
  gameboard.receiveAttack(8, 4);
  gameboard.receiveAttack(8, 5);
  gameboard.receiveAttack(8, 6);
  gameboard.receiveAttack(4, 9);
  gameboard.receiveAttack(5, 9);
  gameboard.receiveAttack(2, 8);
  gameboard.receiveAttack(9, 2);
  gameboard.receiveAttack(2, 6);
  gameboard.receiveAttack(2, 7);
  gameboard.receiveAttack(8, 7);
  gameboard.receiveAttack(8, 8);
  gameboard.receiveAttack(8, 9);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test("All ships are sunk with a complete gameboard with various attacks on the board and five ships sunk", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 8, 2, 1, 0);
  gameboard.placeShip(Ship(3), 5, 5, 0, 1);
  gameboard.placeShip(Ship(3), 2, 6, 0, 1);
  gameboard.placeShip(Ship(4), 8, 6, 0, 1);
  gameboard.placeShip(Ship(5), 0, 0, 1, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 6);
  gameboard.receiveAttack(5, 7);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  gameboard.receiveAttack(4, 0);
  gameboard.receiveAttack(8, 2);
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(2, 4);
  gameboard.receiveAttack(8, 4);
  gameboard.receiveAttack(8, 5);
  gameboard.receiveAttack(8, 6);
  gameboard.receiveAttack(4, 9);
  gameboard.receiveAttack(5, 9);
  gameboard.receiveAttack(2, 8);
  gameboard.receiveAttack(9, 2);
  gameboard.receiveAttack(2, 6);
  gameboard.receiveAttack(2, 7);
  gameboard.receiveAttack(8, 7);
  gameboard.receiveAttack(8, 8);
  gameboard.receiveAttack(8, 9);
  expect(gameboard.allShipsSunk()).toBe(true);
});
