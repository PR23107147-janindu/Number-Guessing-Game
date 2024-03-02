const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (userGuess === randomNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed correctly!";
    } else {
        document.getElementById("result").textContent = "Sorry, try again!";
    }
}

