// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

// Keep asking the user until they guess the correct number
while (guess !== correctNumber) {
    // Prompt the user to enter a number
    guess = Number(prompt("Guess a number between 1 and 10:"));

    // Check the guess and give feedback
    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}
