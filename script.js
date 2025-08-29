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


const coinCountNum = document.getElementById("coin-count");
let coinCount = parseInt(coinCountNum.innerText);

const callButtons = document.getElementsByClassName("call-btn");

// history array
const callHistory = [];

for (const button of callButtons) {
  button.addEventListener("click", function() {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // deduct coins
    coinCount -= 20;
    coinCountNum.innerText = coinCount;

    // get service details from the clicked card
    const card = button.parentNode.parentNode; 
    const serviceName = card.getElementsByClassName("service-name")[0].innerText;
    const serviceNumber = card.getElementsByClassName("hotline-num")[0].innerText;

    // create call history object
    const data = {
      name: serviceName,
      Number: serviceNumber,
      date: new Date().toLocaleTimeString()
    };

    // save in array
    callHistory.push(data);

    // show in UI
    const callHistorySection = document.getElementById("call-history-section");
    const div = document.createElement("div");
    div.innerHTML = `
      <div>
        <h3 class="font-bold text-lg">${data.name}</h3>
        <h6 class="text-gray-500">${data.Number}</h6>
      </div>
      <h6>${data.date}</h6>
    `;
    callHistorySection.appendChild(div);
  });
}


// clear history

const clearHistoryBtn = document.getElementById("clear-history-btn");
clearHistoryBtn.addEventListener("click", function() {
  document.getElementById("call-history-section").innerHTML = "";
  callHistory.length = 0; // reset array
});




// copy icon
const copyCountEl = document.getElementById("copy-count");
let copyCount = parseInt(copyCountEl.innerText);


const copyButtons = document.getElementsByClassName("copy-btn");


for (const button of copyButtons) {
  button.addEventListener("click", function() {
    
    const parentCard = button.parentElement.parentElement; 
    const hotlineNum = parentCard.getElementsByClassName("hotline-num")[0].innerText;

    
    copyCount += 1;
    copyCountEl.innerText = copyCount;

    
    alert(`Hotline number ${hotlineNum} copied!`);
  });
}