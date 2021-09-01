
export function kungFu(myChar, boss) {
  let myCharHp = myChar.myStats[3]//let myChar = Character.myStats;
  let bossHp = Boss.myStats[3]//let character2 = Character2.myStats;
  let charDamage = 0;
  let bossDamage = 0;
  // let myChar.myStats[3] = hp > 0 & bossHP > 0 ? kungFu(char1, boss) : hp > 0 & bossHP =< 0 ? "alert you WON" : alert "Fight Over. You Lose. Try Again?" ;
  charDamage += rollDice(1,20);//damage = rollDice(1,20)
  charDamage +=  (myChar.myStats[1] * .10); //add attack mod to variable damage
  charDamage -= (boss.myStats[2] * .10);//subtract defense mod of enemy from damage (so Character.myStats[2])
  boss.myStats[3] = (this.myStats[3] -= charDamage);//
  bossDamage += rollDice(1,20);
  bossDamage += (boss.myStats[1] * .10);
  bossDamage -=  (myChar.myStats[2] * .10);
  character1.myStats[3] = (this.myStats[3] -= bossDamage);
}



export function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }



// roll dice + attack modifier - enemy defense modifier = amount subtracted from HP