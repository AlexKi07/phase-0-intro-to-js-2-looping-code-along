// Code your solutions in this file
// Function to generate thank-you messages
function writeCards(names, event) {
    let messages = [];
    for (let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Function to count down from a given number to zero
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example usage:
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
// [
//   "Thank you, Guadalupe, for the wonderful surprise gift!",
//   "Thank you, Ollie, for the wonderful surprise gift!",
//   "Thank you, Aki, for the wonderful surprise gift!"
// ]

countDown(4);
// Logs: 4, 3, 2, 1, 0 (each on a new line)