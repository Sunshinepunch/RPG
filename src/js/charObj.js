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
    switch (myEnemy) {
      case "Wimp Lo":
        this.myStats = [10, 10, 40]
        this.myDojo = "Face To Foot Style"
        break;
      case "Axel Kicker":
        this.myStats = [20, 10, 50]
        this.myDojo = "Right Leg Gym"
        break;
      case "Handy Mann":
        this.myStats = [30, 20, 40]
        this.myDojo = "Custodi-gym"
        break;
      case "Both-Legs Jim":
        this.myStats = [40, 10, 40]
        this.myDojo = "Foot to Face Style"
        break;
      case "Baki the Grappler":
        this.myStats = [50, 20, 50]
        this.myDojo = "Strongest on Earth"
        break;
    }
  };
}

