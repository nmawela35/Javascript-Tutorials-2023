/* const nums = [1,2,3,4,5];

const multiply = nums.reduce(((a,b) => a * b));

console.log(multiply); */

const actors = [
    { name: 'johnny', netWorth: 2000000 },
    { name: 'amber', netWorth: 10 },
    { name: 'matt', netWorth: 170000000 },
    { name: 'brad', netWorth: 300000000 },
    { name: 'leonardo', netWorth: 10000000 },
  ]

  const netWorth = actors.reduce((a,b) => a + b.netWorth,0);
  console.log(netWorth);