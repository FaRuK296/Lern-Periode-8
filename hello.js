var options = ["rock", "paper", "scissors"];
var randomNumber = Math.floor(Math.random() * 3);
var selection = prompt("Enter rock, paper or scissors:");
var enemySelection = options[randomNumber];
alert("Your choice: " + selection);
alert("Your Oponents choice: " + enemySelection);
if (selection == enemySelection) {
    alert("It's a tie!");
}
if (selection == "scissors") {
    if (enemySelection == "rock") {
        alert("You've lost.");
    }
    if (enemySelection == "paper") {
        alert("You've won.");
    }
}
if (selection == "rock") {
    if (enemySelection == "paper") {
        alert("You've lost.");
    }
    if (enemySelection == "scissors") {
        alert("You've won.");
    }
}
if (selection == "paper") {
    if (enemySelection == "scissors") {
        alert("You've lost.");
    }
    if (enemySelection == "rock") {
        alert("You've won.");
    }
}
