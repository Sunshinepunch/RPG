export class Character {
  constructor(myType) {
    this.myType = myType
    this.myStats = []
    this.myIndexLoc = 0
    this.myLevel = 1
    this.maxHP = 0
  }

  checkType(myType) {
    switch (myType) {
      case "Dragon":
      this.myStats = [50, 20, 30]
      this.maxHP = 30
      break;
      case "Turtle":
      this.myStats = [20, 40, 40]
      this.maxHP = 40
      break;
      case "Monkey":
      this.myStats = [30, 30, 40]
      this.maxHP = 40
      break;
    };
  }

  levelUp() {
      if (this.myLevel == undefined) {
        console.log("Oh god help");
      }else if (this.myLevel > 1) {
        this.myStats[0] += 10;
        this.myStats[1] += 10;
        this.maxHP += 10;
        this.myStats[2] = this.maxHP;
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
        this.myStats = [20, 20, 50]
        this.myDojo = "Right Leg Gym"
        break;
      case "Handy Mann":
        this.myStats = [30, 20, 60]
        this.myDojo = "Custodi-gym"
        break;
      case "Both-Legs Jim":
        this.myStats = [60, 30, 70]
        this.myDojo = "Foot to Face Style"
        break;
      case "Baki the Grappler":
        this.myStats = [90, 40, 100]
        this.myDojo = "Strongest on Earth"
        break;
    }
  };
}

