for (let i = 1; i <= 17; i++) {
	if (i === 3) {
		continue; //skip 3 and continue
	}

	if (i % 3 === 0) { // skip all numbers divisible by 3
		continue;
	}
	console.log(i);
	if (i === 8) {
		break; //stops at 8
	}
}
