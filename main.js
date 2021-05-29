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
  let cardsChosen = [];
  let cardsChosenId  = [];

  //create board
  let createBoard = () => {
    for (let index = 0; index < cardArray.length; index++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", index);
        // card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  //check for matches

  //flip card
  let flipCard = () => {
      let cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)

      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
      }
  }


  createBoard();
});
