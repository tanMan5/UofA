const Character = require('./Character');


// creates two unique characters using the "character" constructor
const warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
const rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();