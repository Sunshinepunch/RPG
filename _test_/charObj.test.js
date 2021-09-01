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
});