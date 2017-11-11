
// Array that holds words for computer to choose from //
var words = ["apple bottom jeans"];
var wordToGuess;
var displayWord = words[Math.floor(Math.random() * words.length)];

// Wins and losses variable //
var wins = 0;
var loses = 0;

// Guesses left and guessed letters //
var guessesLeft, guessedLetters =[];

//Display Variables 
	
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessesLeft");
  var letterGuessed = document.getElementById("guessed");
  var mysWord = document.getElementById("theWord");

resetGame();
display();

// Reset Function //
function resetGame() {
	guessesLeft = 10;
	guessedWords = [];
	for (var i= 0; i < displayWord.length; i++){
		mysWord.innerHTML += "_ ";
	}	
	console.log("Word to guess: " + displayWord);  

}

// Display to HTML Function //
function display() {
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(",");
}

// User guesses letter within the word //

document.onkeyup = function(){
	var guess = event.key;
	guessedLetters.push(guess);
	var underScore = " ";
	if (displayWord.indexOf(guess) > -1){
		for (var i= 0; i < displayWord.length; i++){
		if (guessedLetters.indexOf(displayWord.charAt(i)) != -1) {
		underScore += displayWord.charAt(i);
		} 		
		else {
		underScore += '_ ';
		}
		}
		console.log('display', underScore);
		alert("Nice");
		console.log(guess);
	}
}

// 


	// IF THE USER GUESSES THE CORRECT LETTER //
		// The underscore is replaced with the correct letter //
		// The guessed letter goes into an array of guessedLetters //
		// No penalty is given for incorrect guess //
		// User guesses again //

	// IF THE USER GUESSES AN INCORRECT LETTER //
		// The displayed word remains unchanged //
		// The guessed letter goes into an array of guessedLetters //
		// -1 id deducted from guessesLeft //
		// User guesses again //

// IF THE USER COMPLETES THE WORD //
	// Entire word is filled in //
	// Picture is displayed //
	// alert congratulations //
	// +1 to wins //
	// Reset guessedLetters array //
	// Reset guessesLeft //
	// Computer chooses a new random word to display //
	// User begins guessing again //

// IF THE USER DOESN'T COMPLETE THE WORD //
	// Entire word is filled in //
	// Picture is displayed //
	// alert you lose //
	// +1 to losses //
	// Reset guessedLetters array //
	// Reset guessesLeft //
	// Computer chooses a new random word to display //
	// User beings guessing again //
