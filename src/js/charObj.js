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
      this.myStats = [50, 20, 30]
    } else if (myType === "Turtle") {
      this.myStats = [20, 40, 40]
    } else if (myType === "Monkey") {
      this.myStats = [30, 30, 40]
    };
  }

}
