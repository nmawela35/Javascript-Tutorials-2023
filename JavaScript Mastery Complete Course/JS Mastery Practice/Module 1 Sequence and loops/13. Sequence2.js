var myString = "I am really hungry";
console.log(myString);

var myUpperString = myString.toUpperCase();
console.log(myUpperString);

var reallyLocation = myString.search("really");
console.log(reallyLocation);

var specialWord = myString.substr( reallyLocation,6);
specialWord = specialWord.toUpperCase();
console.log(specialWord);

var newString = myString.replace('really',specialWord);
console.log(newString);
