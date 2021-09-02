export class Character {
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

export class Boss {
  constructor(myEnemy) {
    this.myEnemy = myEnemy
    this.myStats = []
    this.myIndexLoc = 0
    this.myDojo = ""
  }

  checkEnemy(myEnemy) {
    if (myEnemy === "Wimp Lo") {
      this.myStats = [10, 10, 40]
      this.myDojo = "Face To Foot Style"
    } else if (myEnemy === "Axel Kicker") {
      this.myStats = [20, 10, 50]
      this.myDojo = "Right Leg Gym"
    } else if (myEnemy === "Handy Mann") {
      this.myStats = [30, 20, 40]
      this.myDojo = "Custodi-gym"
    } else if (myEnemy === "Both-Legs Jim") {
      this.myStats = [40, 10, 40]
      this.myDojo = "Foot to Face Style"
    } else if (myEnemy === "Baki the Grappler") {
      this.myStats = [50, 20, 50]
      this.myDojo = "Strongest on Earth"
    };
  }
}

