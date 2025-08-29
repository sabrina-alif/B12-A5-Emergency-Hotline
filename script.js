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



// copy icon
// Get the copy count element in the navbar
const copyCountEl = document.getElementById("copy-count");
let copyCount = parseInt(copyCountEl.innerText);

// Get all Copy buttons
const copyButtons = document.getElementsByClassName("copy-btn");

// Add click event to each Copy button
for (const button of copyButtons) {
  button.addEventListener("click", function() {
    // Find the hotline number in the same card
    const parentCard = button.parentElement.parentElement; // button -> div.mt-4 -> card div.bg-white
    const hotlineNum = parentCard.getElementsByClassName("hotline-num")[0].innerText;

    // Increment copy count in navbar
    copyCount += 1;
    copyCountEl.innerText = copyCount;

    // Show alert
    alert(`Hotline number ${hotlineNum} copied!`);
  });
}