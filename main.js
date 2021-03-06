//card options
const cardArray = [
  {
    name: "chicken",
    img: "img/chicken.png",
  },
  {
    name: "chicken",
    img: "img/chicken.png",
  },
  {
    name: "fish",
    img: "img/fish.png",
  },
  {
    name: "fish",
    img: "img/fish.png",
  },
  {
    name: "lion",
    img: "img/lion.png",
  },
  {
    name: "lion",
    img: "img/lion.png",
  },
  {
    name: "monkey",
    img: "img/monkey.png",
  },
  {
    name: "monkey",
    img: "img/monkey.png",
  },
  {
    name: "octopus",
    img: "img/octopus.png",
  },
  {
    name: "octopus",
    img: "img/octopus.png",
  },
  {
    name: "turtle",
    img: "img/turtle.png",
  },
  {
    name: "turtle",
    img: "img/turtle.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

let createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
};

let checkForMatch = () => {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "img/white.png");
    cards[optionTwoId].setAttribute("src", "img/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    grid.innerHTML = "Congratulations! You found them all!";
  }
};

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
