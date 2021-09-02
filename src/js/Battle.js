
export function kungFu() {
  let myChar1 = new Character("Dragon");
  myChar1.checkType(myChar.myType);
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
}



export function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }



