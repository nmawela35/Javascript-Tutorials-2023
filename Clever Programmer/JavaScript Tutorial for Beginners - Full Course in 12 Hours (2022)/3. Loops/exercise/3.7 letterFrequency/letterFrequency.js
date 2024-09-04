const letterFrequency = (phrase) =>{
    console.log(phrase);
let frequency = {};

for (const letter of phrase){

    if (letter in frequency){    //check if letter exists in frequency
        frequency[letter] = frequency[letter] + 1;     //increment the value by +1
    }
    else {
        frequency[letter] = 1;    //otherwise, set the value to 1
    }
}
return frequency
}

console.log(letterFrequency('haha chris for tomorrow'));
