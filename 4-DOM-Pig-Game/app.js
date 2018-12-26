/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
/*
dice = Math.floor(Math.random() * 6) + 1;

//  querySelector to write to the DOM
document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>";

// querySelector to read from the DOM
var x = document.querySelector("#score-0").textContent;
console.log(x);
*/

function newGame() {
  scores = [0, 0];
  roundScore = 0;

  document.querySelector(".dice").style.display = "NONE";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  if (activePlayer !== 0) {
    // toggle active state
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }

  activePlayer = 0;
}

newGame();

/*
 // function callback method

function btn(){
    // do something here
}

document.querySelector('.btn-roll').addEventListener('click', btn);
*/

//-----------------------------------------------------------
/* using anonymous function */
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display the results
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";
  // 3. update the round score IF the rolled number is NOT a 1
  if (dice !== 1) {
    //Add score and display it in current
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    // Next player
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  // Add current score to global score
  scores[activePlayer] += roundScore;

  // update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  // Check if the player won the game
  if (scores[activePlayer] > 99) {
    var temp = activePlayer + 1;
    newGame();
    alert("Player-" + temp + " has won!");
  } else {
    // Next player
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", newGame);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  // toggle active state
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}
