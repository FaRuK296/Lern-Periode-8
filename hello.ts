type Option = "rock" | "paper" | "scissors";

let options = ["rock", "paper", "scissors"];
let randomNumber = Math.floor(Math.random() * 3);


var selection = (prompt("Enter rock, paper or scissors:") || "").toLowerCase();

var enemySelection = options[randomNumber];

console.log("Your choice: " + selection);
console.log("Your Oponents choice: " + enemySelection);

if (selection == enemySelection) {
    console.log("It's a tie!");
}

if(selection == "scissors") {
    if (enemySelection == "rock") {
        console.log("You've lost.");
    }
    if (enemySelection == "paper") {
        console.log("You've won.");
    }
}

if(selection == "rock") {
    if (enemySelection == "paper") {
        console.log("You've lost.");
    }
    if (enemySelection == "scissors") {
        console.log("You've won.");
    }
}

if(selection == "paper") {
    if (enemySelection == "scissors") {
        console.log("You've lost.");
    }
    if (enemySelection == "rock") {
        console.log("You've won.");
    }
}



