# Guessing Game ~ using JavaScript prompts, loops, and conditional statements. 

## Overview

This is a simple JavaScript project that implements a guessing game. The user is prompted to guess a random number between 1 and 100, and the program provides feedback if the guessed number is too high or too low. The game continues until the user correctly guesses the random number.

## How it Works

### Generating a Random Number

```javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;
```
Why us Math.floor() and Math.random() here's why 
At the beginning of the game, a random number between 1 and 100 is generated using the Math.random() function. The result is then rounded down to the nearest whole number using Math.floor().

### User Input and Guessing Loop

```javascript
let numGuesses = 0;
let userGuess = prompt("Guess a number between 1 and 100");

while (userGuess != randomNumber) {
    numGuesses++;

    if (userGuess > randomNumber) {
        alert("Number is lesser than it! Guess again.");
    } else {
        alert("Number is greater than it! Guess again.");
    }

    userGuess = prompt("Guess a number between 1 and 100");
}
```

Here The game begins by initializing variables to track the number of guesses (numGuesses) and the user's current guess (userGuess). A while loop continues until the user correctly guesses the random number. Inside the loop, the program provides feedback to the user based on whether their guess is too high or too low.

Once the user correctly guesses the random number, a congratulatory alert is displayed, revealing the number of tries it took to guess correctly.
