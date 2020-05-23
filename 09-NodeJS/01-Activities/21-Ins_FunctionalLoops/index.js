const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});

console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over
  const pObj = { ...patron };
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);


const nums = [1,2,3,4,5];

const doubled = nums.map(num => num * 2);

console.log(doubled);

const doubledLTFive = doubled.filter(num => num < 5);

console.log(doubledLTFive);

const weirdArr = [
  {
    name: 'John Smith',
    age: 12
  },
  {
    firstName: 'Jane',
    lastName: 'Austen',
    age: 12
  },
  {
    name: 'Jimmy Joe-Bob',
    birthdate: '08-15-1962'
  }
]

const normalizedArr = weirdArr.map(person => {
  const normalized = {
    firstName: '',
    lastName: '',
    age: 0
  };
  if (person.age) {
    normalized.age = person.age;
  } else if (person.birthdate) {
    normalized.age = 2020 - parseInt(person.birthdate.split('-')[2]);
  }
  if (person.firstName) {
    normalized.firstName = person.firstName
  } else if (person.name) {
    normalized.firstName = person.name.split(' ')[0];
  }
  if (person.lastName) {
    normalized.lastName = person.lastName
  } else if (person.name) {
    normalized.lastName = person.name.split(' ')[1];
  }
  return normalized;
});
console.log(normalizedArr);