let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("feedback").innerText = "";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;

    if (userGuess === secretNumber) {
        document.getElementById("feedback").innerText = `Congratulations bestie! you guessed it, and only after ${attempts} attempts!`;
        document.getElementById("userGuess").disabled = true; 
    } else if (attempts >= 3) {
        document.getElementById("feedback").innerText = `Sorry bestie, better luck next time:( . The correct number was ${secretNumber}.`;
        document.getElementById("userGuess").disabled = true; 
    } else if (userGuess < secretNumber) {
        document.getElementById("feedback").innerText = "Go higher queen";
    } else {
        document.getElementById("feedback").innerText = "Go lower queen";
    }
}

function restartGame() {
    startGame();
    document.getElementById("feedback").innerText = "";
    document.getElementById("userGuess").value = "";
    document.getElementById("userGuess").disabled = false; // Enable input on restart
}

// Initialize the game on page load
startGame();
