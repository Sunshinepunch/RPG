import {Character, Boss} from '../src/js/charObj.js';
describe('Character', () => {

  test('should instantiate a new basic char object', () => {
    let myChar = new Character();
    expect(myChar).toBeDefined();
  });

  test('should define char object as type', () => {
    let myChar = new Character("Dragon");
    expect(myChar.myType).toEqual("Dragon");
  })

  test('should instantiate char with empty stat array' , () => {
    const compArray = [];
    let myChar = new Character("Dragon");
    expect(myChar.myStats).toEqual(compArray);
  })
});

describe('Character.checktype', () => {

  test('should return Dragon attributes to character object', () => {
    let myChar = new Character("Dragon");
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([50, 20, 30]);
  })

  test('should return Turtle attributes to character objects', () => {
    let myChar = new Character("Turtle");
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([20, 40, 40]);
  })

  test('should return Monkey attributes to character objects', () => {
    let myChar = new Character("Monkey");
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([30, 30, 40]);
  })
});

describe('Boss', () => {

  test('should instantiate a Boss and assign attributes', () => {
    let boss = new Boss("Wimp Lo");
    boss.checkEnemy(boss.myEnemy);
    expect(boss.myStats).toEqual([10, 10, 40]);
    expect(boss.myDojo = "Face To Foot Style");
  })
});

describe('Character.levelUp', () => {

  test('should update Dragon attributes', () => {
    let myChar = new Character("Dragon");
    myChar.checkType(myChar.myType);
    myChar.myLevel += 1;
    myChar.levelUp();
    expect(myChar.myStats).toEqual([60,30,40]);
  })
});