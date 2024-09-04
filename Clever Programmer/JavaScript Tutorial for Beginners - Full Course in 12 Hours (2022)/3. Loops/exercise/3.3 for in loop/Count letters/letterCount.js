const howManyLetters = (phrase) => {

  let result = 0;

  for (const index in phrase) {
    // console.log(index)
    // console.log(Number(index) + 1);
    result = Number(index) + 1;
  }
  return { result} //same as { result: result}
};
const phrase = prompt('Write a phrase')
console.log(howManyLetters(phrase));
