const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

let bugObj = {src: "img/bug.png", alt: "Ícone de um bug", nameClass: "-front"};
let respObj = {src: "img/responsivo.png", alt: "Ícone de responsividade", nameClass: "-front"};
let javaObj = {src: "img/java.png", alt: "Ícone de um livro de Java", nameClass: "-front"};
let jsObj = {src: "img/js.png", alt: "Ícone de um livro de JS", nameClass: "-front"};
let gueioObj = {src: "img/icon-collabcode.png", alt: "Gueio mascote da CollabCode"};

const $memoryCardFrontBug = createMemoryCard(bugObj);
const $memoryCardFrontResp = createMemoryCard(respObj);
const $memoryCardFrontJava = createMemoryCard(javaObj);
const $memoryCardFrontJs = createMemoryCard(jsObj);
const $memoryCardGueio = createMemoryCard(gueioObj);


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);

$root.insertAdjacentElement("beforeend", $cardsWrapper);