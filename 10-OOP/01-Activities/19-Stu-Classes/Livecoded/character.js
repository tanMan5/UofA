class Character {
  constructor(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    return this.hitpoints > 0;
  }
  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${this.name} attacked ${opponent.name} and dealt ${this.strength} damage`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
    console.log(`${opponent.name} has ${opponent.hitpoints} HP remaining`);
  }
}

const char1 = new Character('Beavis', 8, 50);
const char2 = new Character('Bob', 5, 25);
char1.printStats();
char2.printStats();
// Create two unique characters using the "character" class
let attackCounter = 0
// Create an interval that alternates attacks every 2000 milliseconds
const interval = setInterval(() => {
  if (attackCounter % 2 === 0) {
    char1.attack(char2);
  } else {
    char2.attack(char1)
  }
  if (char1.isAlive() && char2.isAlive()) {
    attackCounter++;
  } else if (!char1.isAlive()) {
    console.log(`${char1.name} has died. Game over!`);
    clearInterval(interval);
  } else if (!char2.isAlive()) {
    console.log(`${char2.name} has died. Game over!`);
    clearInterval(interval);
  }
}, 2000)