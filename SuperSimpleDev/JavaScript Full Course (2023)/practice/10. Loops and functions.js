function doubleArray(nums) {
	const numsDoubled = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
    if (num === 0){
      return numsDoubled; //end loop immediately
    }
		numsDoubled.push(num * 2);
	}
	// console.log(numsDoubled);
	return numsDoubled;
}

console.log(doubleArray([1, 2, 4, 3]));
console.log(doubleArray([4, 5, 6]));
console.log(doubleArray([1, 2, 0, 3]));
