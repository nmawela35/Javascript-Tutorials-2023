let i = 1;
// i++; run into a while loop, i++ before continue
while (i <= 10) {
	if (i % 3 === 0) {
		i++;
		continue;
	}
	console.log(i);
	i++;
}
