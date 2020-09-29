import Ship from "./Ship";

test("Ship of length 3 with hits to 1 position is not sunk", () => {
  const ship = Ship(3);
  ship.hit(0);
  expect(ship.isSunk()).toBe(false);
});

test("Ship of length 3 with hits to 2 positions is not sunk", () => {
  const ship = Ship(3);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(false);
});

test("Ship of length 3 with hits to all positions is sunk", () => {
  const ship = Ship(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(true);
});
