




// If the letters match, then I win and one point is added
// to my wins.

// If the letters do not match, then I lose and one point is
// added to my loses.

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// The computer must randomly "think" of a letter
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerGuess);

// When I press a key/letter, my letters are compared to the
// computer's letter and recorded to my guesses.
document.onkeyup = function() {
	var keyPress = String.fromCharCode(event.keyCode);
	console.log(keyPress);


}

// 	document.getElementbyID("#kp").innerHTML = keyPress;

