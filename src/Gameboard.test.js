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
  gameboard.placeShip(Ship(1), 0, 0, 0);
  const shipHit = gameboard.receiveAttack(0, 0);
  expect(shipHit).toBe(true);
});

test("Attack at 9,0 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 9, 0, 0);
  const shipHit = gameboard.receiveAttack(9, 0);
  expect(shipHit).toBe(true);
});

test("Attack at 0,9 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 9, 0);
  const shipHit = gameboard.receiveAttack(0, 9);
  expect(shipHit).toBe(true);
});

test("Attack at 5,5 on a ship of 1 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 5, 5, 0);
  const shipHit = gameboard.receiveAttack(5, 5);
  expect(shipHit).toBe(true);
});

test("Attack at 0,0 on a ship of 3 length at that position reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 0, 0, 0);
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
  gameboard.placeShip(Ship(1), 0, 0, 0);
  const shipHit = gameboard.receiveAttack(1, 0);
  expect(shipHit).toBe(false);
});

test("Attack at 1,0 on a ship of 3 length at 0,0 reports a hit", () => {
  let gameboard = Gameboard();
  gameboard.placeShip(Ship(3), 0, 0, 0);
  const shipHit = gameboard.receiveAttack(1, 0);
  expect(shipHit).toBe(true);
});
