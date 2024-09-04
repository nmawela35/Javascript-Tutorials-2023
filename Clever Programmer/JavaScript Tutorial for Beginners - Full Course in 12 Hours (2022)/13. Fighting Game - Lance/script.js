/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset() 
}
*/

let playButton = document.getElementById("play");
let resultDiv = document.getElementById("result");
let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById("p2Name");
let p1HealthDiv = document.getElementById("p1Health");
let p2HealthDiv = document.getElementById("p2Health");

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1, p2, gameState) => {
  // Update the DOM with the names and the latest health of players
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  p1HealthDiv.innerText = p1.health;
  p2HealthDiv.innerText = p2.health;

  // Condition IF either player health is <= 0 then set isOver to true and declareWinner
  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver;
    resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);

    return gameState;
  }
};
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike(player, enemy, attackDmg) {
    let damageAmount = Math.ceil(Math.random() * 10);
    enemy.health -= damageAmount;
    updateGame(p1, p2, game.isOver);
    return `${player.name} attacks ${enemy.name} for ${damageAmount} damage`;
  }
  // ** Heal the player for random number from  1 to 5 **
  heal(player) {

    let hpAmount = Math.ceil(Math.random() * 5); 
    player.health += hpAmount;    // Add hpAmount to players health
   
    updateGame(p1, p2, game.isOver);  //  Update the game and DOM with updateGame()
    return `${player.name} heals for ${hpAmount} HP`;   //  Return a message of 'player name heals for hpAmount HP'
  }
}

class Game {
  constructor() {
    this.isOver = false;
  }

  declareWinner(isOver, p1, p2) {

    let message = "TIE";

    if (isOver == true && p1.health <= 0){
      message = `${p2.name} WINS!`
    }
    else if 
    (isOver == true && p2.health <= 0){
      message = `${p1.name} WINS!`
  }
  document.getElementById('victory').play();

  return message;
}

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1, p2) {
    // set p1 health and p2 health back to 100 and isOver back to false and 
    //clear resultDiv.innerText and don't forget to updateGame()
    p1.health = 100;
    p2.health = 100;
    this.isOver = false;
    resultDiv.innerText = '';
    updateGame(p1,p2,this.isOver)
  }

  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {        //autoplay
    // Reset to make sure player health is back to full before starting
    this.reset(p1,p2)

    while (!this.isOver) {
      //Make sure both players strike() and heal() once each loop
      p1.strike(p1, p2, p1.attackDmg)
      p2.heal(p2)
      p2.strike(p2, p1, p2.attackDmg)
      p1.heal(p1)
    }
    
    return this.declareWinner(this.isOver,p1,p2)
  }
}

let player1 = new Player("Chris", 100, 10);
let player2 = new Player("Lance", 100, 10);
let p1 = player1;
let p2 = player2;

let game = new Game();

updateGame(p1, p2, game.isOver); // ** Intialize the game by calling updateGame() **

// ** Save intial isOver from the game object inside this variable **
let gameState;

// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **
playButton.onclick = () => result.innerText = game.play(p1,p2)
// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener("keydown", function (e) {

    if (e.key == 'q' && p2.health > 0 && game.isOver == false){
      p1.strike(p1,p2,p1.attackDmg)
      document.getElementById('p1attack').play()
    }
});

document.addEventListener("keydown", function (e) {
  // if you press a AND the player health is greater than 0 AND isOver is still false then strike()
  // After healing then play heal sound
  if (e.key == 'a' && p2.health > 0){
    p1.heal(p1);
    document.getElementById('p1heal').play()
  }
});

// ** Player 2 Controls **
document.addEventListener("keydown", function (e) {
  // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()
  // After striking then play attack sound
  if (e.key == 'p' && p1.health > 0 && game.isOver == false){
    p2.strike(p2,p1,p2.attackDmg);
    document.getElementById('p2attack').play()
    
  }
});

document.addEventListener("keydown", function (e) {
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
  // After healing then play heal sound
  if (e.key == 'l' && p1.health > 0){
    p2.heal(p2);
    document.getElementById('p2heal').play()
  }
});

// console.log(p2.strike(p2, p1, p1.attackDmg))
// console.log(p2.heal(p2))
