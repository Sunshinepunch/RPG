
export function kungFu() {
  let myChar1 = new Character("Dragon");
  myChar1.checkType(myChar.myType);
  let boss = new Boss("Wimp Lo");
  boss.checkEnemy(boss.myEnemy);
  let charDamage1 = 0;
  let bossDamage1 = 0;
  let bossHP = boss.myStats[2];
  let myCharHP = myChar1.myStats[2];
  let charAtk = Math.floor(myChar1.myStats[0] * .10);
  let bossAtk = Math.floor(boss.myStats[0] * .10);
  let bossDef = Math.floor(boss.myStats[1] * .10);
  let charDef = Math.floor(myChar1.myStats[1] * .10);
  charDamage1 += rollDice(1,20);
  charDamage1 += charAtk;
  charDamage1 -= bossDef;
  bossHP = (bossHP - charDamage1);
  bossDamage1 += rollDice(1,20);
  bossDamage1 += bossAtk;
  bossDamage1 -= charDef;
  myCharHP = (myCharHP - bossDamage1);
  if(bossHP <= 0) {
    myChar1.myXP += 1;
    console.log("ENEMY DEFEATED", myChar1.myXP);
  } else if(myCharHP <= 0) {
    console.log("YOUR KUNG FU WAS TOO WEAK")
  };
}



export function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }



