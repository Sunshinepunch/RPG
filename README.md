[README.MD](https://github.com/Sunshinepunch/template-repo/files/7092788/README.MD)
# template-repo

Design Specs:
Mystical Martial Arts RPG


Character creation:
Character constructor will have properties - name (input field), style (the 'hero' class) and hp(100), XP, inventory

Style constructor will have these properties - name of style, damage, defense, speed, 
3 Styles: Way of the Dragon, Turtle, Monkey
let myChar = new Character("Dragon")
myChar.checkType(myChar.myType);
expect(myChar.myStats).toEqual([70, 10, 20])

Battle system
Dice Roll System (start at 100 go to zero)
Conditions for winning (hp not zero, other hp = zero)
Combat = d20 rolled until hp hits zero (in turns)
Each roll displays a random anime saying (WHERE ARE YOU GETTING ALL OF THIS POWER)(THIS ISNT EVEN MY FINAL FORM)(ETC ETC)

Level up
Winning battles earns XP, XP changes level (increments of 10)
leveling increases damage, defense (every 2 levels, extra die roll)


Inventory
inventory affects the base value of the die roll : sword = damage +1, armor = damage -1
Inventory {great, good, ok}, random chance (20%, 50%, 30%)

1 button - attack
1 button - explore % chance to find item/encounter/rest (10% item/ 60% encounter/ 30% Heal)


dojo [face to foot style, Right leg Gym, Ancestral index finger, both legs Jim, last boss ]

Game ends if - you die because hp = 0, OR you kill last boss

