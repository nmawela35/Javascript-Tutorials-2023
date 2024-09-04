const sum = async (a, b) => a + b;

console.log( sum(3, 5)
    .then (value => console.log(value)), "sum");
