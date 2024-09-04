// A function that split words and returns a number of times the word appears

const wordFrequency = (phrase) => {
  let frequency = {};
  words = phrase.split(" "); //turns into an array

  for (const word of words) {
    if (word in frequency) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  // console.log(words);
  return frequency;
};
console.log(wordFrequency("lol what lol yo yo yo"));

const userInput = prompt("Write your sentence");
console.log(wordFrequency(userInput));
