
// Array that holds words for computer to choose from //

var words = ["This", "Is", "A", "Test"];
var wordToGuess;

// Wins and losses variable //
var wins = 0;
var loses = 0;

// Guesses left and guessed letters //
var guessesLeft, guessedLetters, wordToGuess;

resetGame();
display();


// Display to HTML Function //
function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");
  var mysWord = document.getElementById("theWord");
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  mysWord.innerHTML = theWord;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(",");
}

// Reset Function //

function resetGame() {
	guessesLeft = 10;
	guessedWords = [];
	wordToGuess = words[Math.floor(Math.random() * words.length)];    // Computer randomly selects a word from the array //
	console.log("Word to guess: " + wordToGuess);  

}

// Computer displays the word as underscores //

// User guesses letter within the word //

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
