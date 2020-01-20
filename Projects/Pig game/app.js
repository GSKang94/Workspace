var roundScore, totalScore,activePlayer,p0, p1, rollDice, hold, dice, current_0, current_1, newGame, gamePlaying;

// new game
init();

// array of dice no.
imageArray = ["","dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"]



rollDice.addEventListener("click", function(){
	if (gamePlaying) {
		// show dice display
	dice.classList.remove("toggleDisplay")
	// gen.random no.
	var score = Math.floor(Math.random() * 6 + 1);
    // match no.with array
    dice.src = imageArray[score]
    // add logic if score is 1
	    if (score !== 1) {
	    	// update roundScore of the given player
	    	roundScore += score;
	    	document.querySelector("#current-" + activePlayer).textContent = roundScore;
	    } else {
	    	// reset
	    	toggle();
		  }
	}
})

hold.addEventListener("click", function(){
	if (gamePlaying) {
		// add roundScore to the global of the given player
	// globalScore += roundScore;
	totalScore[activePlayer] += roundScore;
	// update the UI
	document.querySelector("#score-" + activePlayer).textContent = totalScore[activePlayer];
    // check if player won the game
	    if (totalScore[activePlayer] >= 100) {
	    	// Change player name to winner
	    	document.querySelector(".p" + activePlayer).textContent = "Winner!"
	    	// remove dice
	       	dice.classList.add("toggleDisplay")
	       	// change winner background
	    	document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner")
	    	document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
	    	gamePlaying = false;

	    } else {
			 toggle();
		  }
	}
})

newGame.addEventListener("click",init)

function toggle() {
	// next player turn
    	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    	// reset roundscore
    	roundScore = 0;
    	// reset roundscore textContent
    	current_0.textContent =0;
    	current_1.textContent =0;
    	// togggle background of the given player
    	document.querySelector(".player-0-panel").classList.toggle("active")
    	document.querySelector(".player-1-panel").classList.toggle("active")
    	// remove dice display again
    	dice.classList.add("toggleDisplay")
}

function init() {
	gamePlaying = true;
	totalScore = [0,0]
	roundScore = 0;
	activePlayer = 0;
	p0 = document.querySelector(".p0");
	p1 = document.querySelector(".p1");
	rollDice = document.querySelector(".btn-roll");
	hold = document.querySelector(".btn-hold");
	dice = document.querySelector(".dice");
	current_0 = document.querySelector("#current-0");
	current_1 = document.querySelector("#current-1");
	newGame = document.querySelector(".btn-new");
	// rem. dice display at start
	dice.classList.add("toggleDisplay")
	document.querySelector(".player-0-panel").classList.remove("winner")
	document.querySelector(".player-1-panel").classList.remove("winner")
	document.querySelector(".player-0-panel").classList.remove("active")
	document.querySelector(".player-1-panel").classList.remove("active")
	document.querySelector(".player-0-panel").classList.add("active")

	// document.querySelector(".player-score").textContent = 0;
	askForName();
}

function askForName() {
	var name1 = prompt("player 1 enter your name");
	p0.textContent = name1;
	var name2 = prompt("player 2 enter your name");
	p1.textContent = name2;
}












// /*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

// */
// var rollDice = document.querySelector(".btn-roll");
// var hold = document.querySelector(".btn-hold");
// var dice = document.querySelector(".dice");
// var score_0 = document.querySelector("#score-0") 
// var score_1 = document.querySelector("#score-1") 
// var name_0 = document.querySelector("#name-0");
// var name_1 = document.querySelector("#name-1");
// var current_0 = document.querySelector("#current-0")
// var current_1 = document.querySelector("#current-1")

// dice.style.display = 'none';
// var counter1 = 0;
// var counter2 = 0;
// var diceUrl =["dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"]

// var player1 = true;
// var player2 = true;


// function p1Turn() {
// 	player2 = false;
// 	player1 = true;
// }
// function p2Turn() {
// 	player1 = false;
// 	player2 = true;
// }

// rollDice.addEventListener("click", function(){
// 	if (player1) {
// 		p1()
// 	} else if(player2){
// 		p2();
// 	}
// })



// hold.addEventListener("click", function(){
// 	if (player1) {
// 	score_0.textContent = counter1;
// 	// counter1 = 0
// 	// current_0.textContent = 0;
// 	p2Turn()
// 	}else {
// 	score_1.textContent = counter2;
// 	// counter2 = 0
// 	// current_1.textContent = 0;
// 	p1Turn()
// 	}
// 	miss()
// })

// function p1(){
// 	dice.style.display = 'block';

// 	var random = Math.floor((Math.random() * 6))
// 	var diceNumber = diceUrl[random]
// 	dice.src = diceNumber;
// 	// console.log(diceNumber)
//     counter1 = counter1 + (random + 1);
// 	current_0.textContent = counter1;

// 	// if (diceNumber === "dice-1.png"){
// 	// 	miss();
// 	// 	p2Turn()
// 	// }
// }
// function p2(){
// 	var random = Math.floor((Math.random() * 5))
// 	var diceNumber = diceUrl[random]
// 	dice.src = diceNumber;
//     counter2 = counter2 + (random + 1);
//     current_1.textContent = counter2;

// 	// if (diceNumber === "dice-1.png"){
// 	// 	miss();
// 	// 	p1Turn()
// 	// }

// }

// function miss() {
// 		current_0.textContent = 0;
// 		current_1.textContent = 0;
// 		// counter1 = 0;
// 		// counter2 = 0;
		
// 	}