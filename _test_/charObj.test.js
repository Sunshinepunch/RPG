import Character from '../src/js/charObj.js';
    
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
    expect(myChar.myStats).toEqual([60, 10, 30]);
  })

  test('should return Turtle attributes to character objects', () => {
    let myChar = new Character("Turtle");
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([30, 50, 20]);
  })
});