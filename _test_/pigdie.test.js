import { test } from "@jest/globals";
import { rollDice, Player } from "../src/pigdie";

describe('rollDice', () => {

  test('should return a dice roll between values of 1-6', () => {
    const dice = rollDice(1,6);
    expect(dice).toBeLessThanOrEqual(6);
    expect(dice).toBeGreaterThanOrEqual(1);
});
  // test
});

describe('Player', () => {

  test('Successfully creates a player object with appropriate parameters', () => {
    const player = new Player(0, 10);
    expect(player.total).toEqual(0);
    expect(player.current).toEqual(10);
  }); 
});