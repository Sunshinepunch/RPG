import { rollDice } from "../src/js/Battle.js";

describe ('rollDice', () => {

  test('should return an integer value', () => {
    let dice = rollDice(1,20);
    expect(dice).toBeLessThanOrEqual(20);
    expect(dice).toBeGreaterThanOrEqual(1);
  });
})