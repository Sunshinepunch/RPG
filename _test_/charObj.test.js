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