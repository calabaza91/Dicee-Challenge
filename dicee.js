//JavaScript file for Dicee Challenge

// Random number 1 - 6
var randNum = Math.floor(Math.random() * 6) + 1;

// Make Player 1 die's value equal to random number
document.querySelector(".img1").setAttribute("src", "images/dice" + randNum + ".png");
