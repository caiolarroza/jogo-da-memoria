const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard();

const $memoryCardBug = createMemoryCard({src: "img/bug.png", alt: "Ícone de um bug"});
const $memoryCardResp = createMemoryCard({src: "img/responsivo.png", alt: "Ícone de responsividade"});
const $memoryCardJava = createMemoryCard({src: "img/java.png", alt: "Ícone de um livro de Java"});
const $memoryCardJS = createMemoryCard({src: "img/js.png", alt: "Ícone de um livro de JS"});
const $memoryCardGueio = createMemoryCard({src: "img/icon-collabcode.png", alt: "Gueio mascote da CollabCode"});


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);

$root.insertAdjacentElement("beforeend", $cardsWrapper);