const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCardFrontJs = createMemoryCard("img/js.png", "Ícone de um livro de JS", '-front');
const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio mascote da CollabCode");

const $memoryCardFrontBug = createMemoryCard("img/bug.png", "Ícone de um bug", '-front');
const $memoryCardFrontResp = createMemoryCard("img/responsivo.png", "Ícone de responsividade", '-front');
const $memoryCardFrontJava = createMemoryCard("img/java.png", "Ícone de um livro de Java", '-front');


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper);