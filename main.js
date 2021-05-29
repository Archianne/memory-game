document.addEventListener("DOMContentLoaded", () => {
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

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create board
  let createBoard = () => {
    for (let index = 0; index < cardArray.length; index++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", index);
      //   card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  };

  //check for matches
  let checkForMatch = () => {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "img/white.png");
      cards[optionTwoId].setAttribute("src", "img/white.png");
      cardsWon.push(cardsChosen);
    } else {
      alert("Try Again");
      cards[optionOneId].setAttribute("src", "img/blank.png");
      cards[optionTwoId].setAttribute("src", "img/blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultsDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congrats'
    }
  };

  //flip card
  let flipCard = () => {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };

  createBoard();
});
