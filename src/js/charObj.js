export default class Character {
  constructor(myType) {
    this.myType = myType
    this.myStats = []
    this.myIndexLoc = 0
    this.myXP = 0
    this.myLevel = 1
  }

  checkType(myType) {
    if (myType === "Dragon") {
      this.myStats = [60, 10, 30]
    } else if (myType === "Turtle") {
      this.myStats = [20, 40, 40]
    } else if (myType === "Monkey") {
      this.myStats = [35, 30, 35]
    };
  }
}

export function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }