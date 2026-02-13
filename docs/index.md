---
title: Typescript RockPaperScissors Tutorial
---

# Goal
In this tutorial you will learn, how to create a simple rock paper scissors game, using Typescript and run it in the browser.

**Previous Knowledge**

We'll assume you already know the basics of JavaScript and HTML (variables, if/else statements, simple page structure).

**What you'll learn**

-What TypeScript is and why it is useful

-How to compile TypeScript into JavaScript

-How to connect TypeScript with an HTML page

-How to implement the game logic (including a "first to 3 points" mode)

**Tutorial**

## Step 1: Create the project files

Create the following files:

-index.html

-style.css

-hello.ts

**TypeScript must be compiled before it can run in the browser.**

Compile it using:

tsc hello.ts


This generates a hello.js file.

## Step 2: Use TypeScript types

One important difference between TypeScript and JavaScript is the use of types.

Example:

type Option = "rock" | "paper" | "scissors";


This ensures that only valid game options are allowed.

## Step 3: Implement the game logic

The game works as follows:

1. The player enters rock, paper or scissors.

2. The computer generates a random choice.

3. The choices are compared.

4. The score increases.

5. The game ends when someone reaches 3 points.

**Example of checking the winner:**

if (
  (selection === "rock" && enemySelection === "scissors") ||
  (selection === "scissors" && enemySelection === "paper") ||
  (selection === "paper" && enemySelection === "rock")
) {
  playerScore++;
}

## Step 4: Connect TypeScript with HTML

In your index.html file, include the compiled JavaScript file:

<script src="hello.js"></script>


Important: The browser cannot run .ts files directly.
You must always compile TypeScript into JavaScript first.

** Result

After opening the page in the browser, the user can play Rock-Paper-Scissors against a randomly generated opponent.

The game displays:

-The player's choice

-The enemy's choice

-The current score

-The winner after reaching 3 points

## What could go wrong?

-Forgetting to compile TypeScript (hello.js missing)

-Linking hello.ts instead of hello.js

-Using process.argv in the browser (works only in Node.js)

-Typing something other than rock, paper or scissors

-Not handling uppercase/lowercase input












