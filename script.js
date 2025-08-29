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