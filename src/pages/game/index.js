createMemoryCardFront();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();

const $cards = document.querySelectorAll(".memory-card");

$cards.forEach(($card) => {
    $card.addEventListener("click", getMouseClick);
});