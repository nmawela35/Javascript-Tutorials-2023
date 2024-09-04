//Another to loop through an array.
//forEach don't have continue.
// Do not use break here, better use it on regular loop

let array1 = ['make dinner', 'drink tea', 'watch youtube'];

array1.forEach(function (value, index) {
  if (value === 'drink tea'){                 //will skip this and continue
    return;
  }
	console.log(index);
	console.log(value);
});
