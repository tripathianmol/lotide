// Returns an object cotaining the count of the number of letters in the sentence.
const countLetters = function(sentence) {
  let result = {};

  for (let letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

module.exports = countLetters;