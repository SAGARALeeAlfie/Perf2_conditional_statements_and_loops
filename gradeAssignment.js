// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Check the grade category using else-if statements
if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80) {
    console.log("Your grade is: Good.");
} else if (score >= 70) {
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}
