
const actors = [
    { name: 'johnny', netWorth: 2000000 },
    { name: 'amber', netWorth: 10 },
    { name: 'matt', netWorth: 170000000 },
    { name: 'brad', netWorth: 300000000 },
    { name: 'leonardo', netWorth: 10000000 },
  ]

const netWorth = actors.filter(actor => actor.netWorth > 2000000 )

console.log(netWorth ) 

playground.innerHTML = '<h1> Chris </h2>'