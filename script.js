// heart icon
const heartCountNum = document.getElementById("heart-count");
let heartCount = parseInt(heartCountNum.innerText);

const hearts = document.getElementsByClassName("heart-btn");
for (const heart of hearts) {
  heart.addEventListener("click", function() {
    heartCount += 1;
    heartCountNum.innerText = heartCount;
  });
}



// call icon
const coinCountNum = document.getElementById("coin-count");
let coinCount = parseInt(coinCountNum.innerText);

const callButtons = document.getElementsByClassName("call-btn");


for (const button of callButtons) {
  button.addEventListener("click", function() {

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

     coinCount -= 20;
    coinCountNum.innerText = coinCount;


  });
}