const max = (numbers) =>{
    let maxNum = numbers[0];
    
    for (const number of numbers){
        if (number > maxNum ){
            maxNum  = number;
        }
    }
    return {result:maxNum}
}
console.log(max([1, 2, 3, 4, 5, 20, 100, 50, 101, 105]));