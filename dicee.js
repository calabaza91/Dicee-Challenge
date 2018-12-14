//JavaScript file for Dicee Challenge

//2 Random numbers 1 - 6
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

// Make Player 1 and 2's dice value equal to complementary random number
document.querySelector(".img1").setAttribute("src", "images/dice" + randNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randNum2 + ".png");
