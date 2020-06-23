// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

const permutationSubstring = function(str, sub) {
  const charMap = {};

  for (let i = 0; i < sub.length; i++) {
    const char = sub[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charMap) {
      charMap[char] -= 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > 0) {
      return false;
    }
  }

  return true;
};
