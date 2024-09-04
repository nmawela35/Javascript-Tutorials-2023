// redDiv = document.getElementById("red");
// yellowDiv = document.getElementById("yellow");
// greenDiv = document.getElementById("green");

// redDiv.onclick = function(){
//     console.log('red');
// };
// yellowDiv.onclick = function(){
//     console.log('yellow');
// };
// greenDiv.onclick = () => console.log('green');

const squares = document.querySelectorAll('.colorSquare');

// squares.onclick = () => console.log('red');

// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value); //pulled from HTML

const timesClicked = {'red': 0, 'yellow':0, 'green': 0};
squares.forEach(square =>{
    square.onclick= () => {
        timesClicked[square.value] += 1 //value is a new key
        // console.log(timesClicked[square.value]);
        square.innerText = timesClicked[square.value]
    }
});

function clearScores(){
    squares.forEach(square =>{

    })
    // timesClicked.red = 0;
    // timesClicked.yellow = 0;
    // timesClicked.green = 0;
    squares.forEach(square =>{
        timesClicked[square.value] = ''
        square.innerText = timesClicked[square.value]})
    }

    

const clearGameBtn = document.getElementById('clear-game');
clearGameBtn.onclick = () => clearScores();


   
    