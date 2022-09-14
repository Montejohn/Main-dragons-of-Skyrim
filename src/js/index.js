const btnForward = document.getElementById("btn-forward");
const btnBack = document.getElementById("btn-back");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function hideSelectedCard(){
  const selectedCard = document.querySelector(".selected");
  selectedCard.classList.remove("selected");
}
function showCard (cardIndex){
  cards[cardIndex].classList.add("selected");
}


btnForward.addEventListener("click", function () {
  if (currentCard === cards.length - 1) {
    currentCard = 0
  } else{
    currentCard++
  }
  
hideSelectedCard();

  
  showCard(currentCard);

  });


btnBack.addEventListener("click", function () {
  if (currentCard === 0) {
    currentCard = cards.length -1
  } else {
    currentCard--
  }

  hideSelectedCard();

  
  showCard(currentCard);
});
