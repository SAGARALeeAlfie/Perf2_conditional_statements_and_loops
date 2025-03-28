// Hardcoded correct password
const correctPassword = "secret123";
let userPassword;

// Keep asking for the password until the user enters the correct one
do {
    userPassword = prompt("Enter your password:");
    
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

console.log("Access granted.");
