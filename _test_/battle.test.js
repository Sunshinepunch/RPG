import { rollDice, kungFu } from "../src/js/Battle.js";
import {Character, Boss } from '../src/js/charObj.js';

  let myChar1 = new Character("Dragon");
  myChar1.checkType(myChar1.myType);
  let boss = new Boss("Wimp Lo");
  boss.checkEnemy(boss.myEnemy);


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

  // test('should return charDamage[1] as number 50', () => {
  //   let attackmod = Math.floor(myChar.myStats[0] * 1.10);
  //   expect(attackmod).toEqual(55);
  // });

  // test('should instantiate boss.myStats', () => {
  //   let boss = new Character("Turtle");
  //   boss.checkType(boss.myType);
  // });

  // test('should return defmod as 44', () => {
  //   let boss = new Character("Turtle");
  //   boss.checkType(boss.myType);
  //   let defensemod = Math.floor(boss.myStats[1] * 1.10);
  //   expect(defensemod).toEqual(44);
  // });

  // test('should return charDamage at a value between 0 and 21 ', () => {
  //   let charDamage = 0;
  //   let attackMod = Math.floor(myChar.myStats[0] * .10);
  //   let defenseMod = Math.floor(boss.myStats[1] * .10);
  //   charDamage += 20;
  //   charDamage += attackMod;
  //   charDamage -= defenseMod;
  //   expect(charDamage).toBeLessThanOrEqual(21);
  //   expect(charDamage).toBeGreaterThanOrEqual(0);
  // });

  // test('should return boss.myStats equal to 39', () => {
  //   let attackMod = Math.floor(myChar.myStats[0] * .10);
  //   let defenseMod = Math.floor(boss.myStats[1] * .10);
  //   charDamage += 20;
  //   charDamage += attackMod;
  //   charDamage -= defenseMod;
  //   boss.myStats[2] = (boss.myStats[2] - charDamage);
  //   expect(boss.myStats[2] === 39);
  // });

  // test('should return boss1.myStats between 19 and 38', () => {
  //   let myChar1 = new Character("Dragon");
  //   myChar1.checkType(myChar.myType);
  //   let boss1 = new Character("Turtle");
  //   boss1.checkType(boss.myType);
  //   let charDamage1 = 0;
  //   let attackMod = Math.floor(myChar1.myStats[0] * .10);
  //   let defenseMod = Math.floor(boss1.myStats[1] * .10);
  //   charDamage1 += rollDice(1,20);
  //   charDamage1 += attackMod;
  //   charDamage1 -= defenseMod;
  //   boss1.myStats[2] = (boss1.myStats[2] - charDamage1);
  //   expect( 18 < boss1.myStats[2] < 39);
  // });

  test('should return char1.myStats and boss1.myStats modified by respective damage', () => {
    let myChar1 = new Character("Dragon");
    myChar1.checkType(myChar1.myType);
    let boss1 = new Character("Turtle");
    boss1.checkType(boss.myType);
    let charDamage1 = 0;
    let bossDamage1 = 0;
    let boss1HP = boss1.myStats[2];
    let myCharHP = myChar1.myStats[2];
    let charAtk = Math.floor(myChar1.myStats[0] * .10);
    let bossAtk = Math.floor(boss1.myStats[0] * .10);
    let bossDef = Math.floor(boss1.myStats[1] * .10);
    let charDef = Math.floor(myChar1.myStats[1] * .10);
    charDamage1 += rollDice(1,20);
    charDamage1 += charAtk;
    charDamage1 -= bossDef;
    boss1HP = (boss1HP - charDamage1);
    bossDamage1 += rollDice(1,20);
    bossDamage1 += bossAtk;
    bossDamage1 -= charDef;
    myCharHP = (myCharHP - bossDamage1);
  });

  test('should simulate fight between', () => {
    let charDamage1 = 0;
    let bossDamage1 = 0;
    let boss1HP = boss.myStats[2];
    let myCharHP = myChar1.myStats[2];
    let charAtk = Math.floor(myChar1.myStats[0] * .10);
    let bossAtk = Math.floor(boss.myStats[0] * .10);
    let bossDef = Math.floor(boss.myStats[1] * .10);
    let charDef = Math.floor(myChar1.myStats[1] * .10);
    charDamage1 += rollDice(1,20);
    charDamage1 += charAtk;
    charDamage1 -= bossDef;
    boss1HP = (boss1HP - charDamage1);
    bossDamage1 += rollDice(1,20);
    bossDamage1 += bossAtk;
    bossDamage1 -= charDef;
    myCharHP = (myCharHP - bossDamage1);
  });

  test('should execute if statement when boss HP is zero', () => {
    let charDamage1 = 0;
    let bossDamage1 = 0;
    let boss1HP = boss.myStats[2];
    let myCharHP = myChar1.myStats[2];
    let charAtk = Math.floor(myChar1.myStats[0] * .10);
    let bossAtk = Math.floor(boss.myStats[0] * .10);
    let bossDef = Math.floor(boss.myStats[1] * .10);
    let charDef = Math.floor(myChar1.myStats[1] * .10);
    charDamage1 += rollDice(1,20);
    charDamage1 += charAtk;
    charDamage1 -= bossDef;
    boss1HP = (boss1HP - charDamage1);
    bossDamage1 += rollDice(1,20);
    bossDamage1 += bossAtk;
    bossDamage1 -= charDef;
    myCharHP = (myCharHP - bossDamage1);
    boss1HP = 0;
    if(boss1HP <= 0) {
      myChar1.myXP += 1;
      console.log("ENEMY DEFEATED", myChar1.myXP);
    } else if(myCharHP <= 0) {
      console.log("YOUR KUNG FU WAS TOO WEAK")
    };
  });

  test('should execute if statement when boss HP is zero', () => {
    let charDamage1 = 0;
    let bossDamage1 = 0;
    let boss1HP = boss.myStats[2];
    let myCharHP = myChar1.myStats[2];
    let charAtk = Math.floor(myChar1.myStats[0] * .10);
    let bossAtk = Math.floor(boss.myStats[0] * .10);
    let bossDef = Math.floor(boss.myStats[1] * .10);
    let charDef = Math.floor(myChar1.myStats[1] * .10);
    charDamage1 += rollDice(1,20);
    charDamage1 += charAtk;
    charDamage1 -= bossDef;
    boss1HP = (boss1HP - charDamage1);
    bossDamage1 += rollDice(1,20);
    bossDamage1 += bossAtk;
    bossDamage1 -= charDef;
    myCharHP = (myCharHP - bossDamage1);
    boss1HP = 0;
    if(boss1HP <= 0) {
      myChar1.myLevel += 1;
    } else if(myCharHP <= 0) {
      console.log("YOUR KUNG FU WAS TOO WEAK")
    };
  });
})


// boss.myStats[2] = (boss.myStats[2] -= charDamage)

// let defensemod = Math.floor(boss.myStats[1] * 1.10);
//     expect(defensemod).toEqual(44);
// console.log(myChar.myStats[1]);
//     let result = myChar.myStats.map(function (x) {
//       return parseInt(x);
//       });
//     console.log(result);
//     charDamage += (result * .10);

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