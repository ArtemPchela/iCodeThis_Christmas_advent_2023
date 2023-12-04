const showCardButton = document.getElementById("showCard");
const itemCard = document.getElementById("itemCard");
const hideCardButton = document.getElementById("hideCard");
const homeButton = document.getElementById("home");

const h1Element = document.getElementById("animatedText");

const colors = ["#a28c1a", "#6940d0", "#3d482d", "#b730b5"];
let currentIndex = 0;

function changeH1Color() {
  const currentColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;

  h1Element.style.color = currentColor;
  h1Element.style.transition = "color 1s ease-in-out";
}

function smoothColorChange() {
  setInterval(changeH1Color, 3000);
}

smoothColorChange();

showCardButton.addEventListener("click", () => {
  itemCard.style.display = "block";
  homeButton.style.display = "none";
});

hideCardButton.addEventListener("click", () => {
  itemCard.style.display = "none";
  homeButton.style.display = "block";
});
