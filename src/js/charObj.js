export default class Character {
  constructor(myType) {
    this.myType = myType
    this.myStats = []
    this.myIndexLoc = 0
  }

  checkType(myType) {
    if (myType === "Dragon") {
      this.myStats = [60, 10, 30]
    } else if (myType === "Turtle") {
      this.myStats = [30, 50, 20]
    } else if (myType === "Monkey") {
      this.myStats = [35, 30, 35]
    };
  }
}