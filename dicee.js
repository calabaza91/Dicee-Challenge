//JavaScript file for Dicee Challenge

//2 Random numbers 1 - 6
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

// Make Player 1 and 2's dice value equal to complementary random number
document.querySelector(".img1").setAttribute("src", "images/dice" + randNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randNum2 + ".png");

//Change h1 depending on winner or draw
if (randNum1 > randNum2) {
  document.querySelector("h1").innerText = "🏆 Player 1 Wins!";
}else if (randNum2 > randNum1) {
  document.querySelector("h1").innerText = "Player 2 Wins!🏆 ";
}else{
  document.querySelector("h1").innerText = "🙅Draw!🙅";
}
