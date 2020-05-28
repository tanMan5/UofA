// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, "Woof!");
const cats = new Animal(false, "Meow!");
const parrots = new Animal(true, "Caw!");

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
dogs.names = ['Spike','Thor','Fido', 'Buster'];
console.log(dogs);
cats.makeNoise();
parrots.makeNoise();

const animals = [];

animals.push(dogs, cats, parrots);
console.log(animals);

// If we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

const massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);