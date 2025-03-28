// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week:");

// Convert input to lowercase for case-insensitive comparison
day = day.toLowerCase();

// Assign tasks based on the day
switch (day) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend team meeting.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Work on your project.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Review your notes.");
        break;
    case "friday":
        console.log("Your task for Friday is: Complete pending work.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Relax and enjoy your day.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Plan for the upcoming week.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}
