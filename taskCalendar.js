// Prompt the user to enter a day of the week
const dayOfWeek = prompt("Enter a day of the week:");

// Switch statement to map each day to a specific task
switch (dayOfWeek.toLowerCase()) {
    case 'monday':
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case 'tuesday':
        console.log("Your task for Tuesday is: Attend team meeting.");
        break;
    case 'wednesday':
        console.log("Your task for Wednesday is: Work on the project report.");
        break;
    case 'thursday':
        console.log("Your task for Thursday is: Prepare for the presentation.");
        break;
    case 'friday':
        console.log("Your task for Friday is: Review your week's progress.");
        break;
    case 'saturday':
        console.log("Your task for Saturday is: Relax and recharge.");
        break;
    case 'sunday':
        console.log("Your task for Sunday is: Plan for the upcoming week.");
        break;
    default:
        console.log("Invalid day entered. Please enter a valid day of the week.");
}
