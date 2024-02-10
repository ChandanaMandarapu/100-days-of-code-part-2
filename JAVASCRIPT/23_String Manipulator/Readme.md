# String Manipulator ~ understand the basics of JavaScript and string manipulation

## Overview

This is a simple JavaScript project that focuses on manipulating strings. In this project, we'll explore how to reverse the order of words in a given string and find the longest and shortest words in that string.

## How it Works

### 1. Taking Input

```javascript
const firstString = prompt("Enter any two strings:");
```

### 2. Reversing the String 

```javascript
const words = firstString.split(" ");
const reversedWords = words.reverse();
const reversedString = reversedWords.join(" ");
```

### 3 .  Finding Longest and Shortest Words

```javascript
let longestWord = "";
let shortestWord = words[0];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
  if (words[i].length < shortestWord.length) {
    shortestWord = words[i];
  }
}
```

This part of the code finds the longest and shortest words in the original string. It initializes two variables, longestWord and shortestWord, and iterates through each word in the array. If a word is longer than the current longest word, it becomes the new longest word; if it's shorter than the current shortest word, it becomes the new shortest word.
Finally, the program prints the reversed string, longest word, and shortest word to the browser console using console.log.
