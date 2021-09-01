import { rollDice, kungFu } from "../src/js/Battle.js";
import Character from '../src/js/charObj.js';

let myChar = new Character("Dragon");
let boss = new Character("Turtle");


describe ('rollDice', () => {

  test('should return an integer value', () => {
    let dice = rollDice(1,20);
    expect(dice).toBeLessThanOrEqual(20);
    expect(dice).toBeGreaterThanOrEqual(1);
  });
})

describe ('kungFu', () => {
  test('should instantiate charDamage at zero value', () => {
    let charDamage = 0;
    expect(charDamage).toEqual(0);
  });

  test('should instantiate bossDamage at zero value', () => {
    let bossDamage = 0;
    expect(bossDamage).toEqual(0);
  });
  
  test('should return charDamage value between 1-20', () => {
    let charDamage = 0;
    charDamage += rollDice(1,20);
    expect(charDamage).toBeLessThanOrEqual(20);
    expect(charDamage).toBeGreaterThanOrEqual(1);
  });

  test('should return charDamage modified by attack modifier formula', () => {
    let charDamage = 0;
    charDamage += rollDice(1,20);
    expect(charDamage).toBeLessThanOrEqual(20);
    expect(charDamage).toBeGreaterThanOrEqual(1);
  });

})



// export function kungFu(myChar, boss) {
//   let myChar = myChar.myStats//let myChar = Character.myStats;
//   let boss = Boss.myStats//let character2 = Character2.myStats;
//   let charDamage = 0;
//   let bossDamage = 0;
//   // let bossHP = Boss.myStats[3]
//   // let myChar.myStats[3] = hp > 0 & bossHP > 0 ? kungFu(char1, boss) : hp > 0 & bossHP =< 0 ? "alert you WON" : alert "Fight Over. You Lose. Try Again?" ;
//   charDamage += rollDice(1,20);//damage = rollDice(1,20)
//   charDamage +=  (myChar.myStats[1] * .10); //add attack mod to variable damage
//   charDamage -= (boss.myStats[2] * .10);//subtract defense mod of enemy from damage (so Character.myStats[2])
//   boss.myStats[3] = (this.myStats[3] -= charDamage);//
//   bossDamage += rollDice(1,20);
//   bossDamage += (boss.myStats[1] * .10);
//   bossDamage -=  (myChar.myStats[2] * .10);
//   character1.myStats[3] = (this.myStats[3] -= bossDamage);
// 