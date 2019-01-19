const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");
const $memoryCard1 = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");

const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");
const $memoryCard7 = document.createElement("article");
const $memoryCard8 = document.createElement("article");

const $iconCollab = `<img 
                src='img/icon-collabcode.png' 
                alt='Gueio mascote da CollabCode' 
                class='icon'>`;

const $iconJs = `<img 
                src='img/js.png' 
                alt='Gueio mascote da CollabCode' 
                class='icon'>`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);

$memoryCard1.classList.add("memory-card");
$root.insertBefore($memoryCard1, null);
$memoryCard1.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard2.classList.add("memory-card");
$root.insertBefore($memoryCard2, null);
$memoryCard2.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard3.classList.add("memory-card");
$root.insertBefore($memoryCard3, null);
$memoryCard3.insertAdjacentHTML("afterbegin", $iconCollab);


$memoryCard4.classList.add("memory-card");
$root.insertBefore($memoryCard4, null);
$memoryCard4.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard5.classList.add("memory-card");
$root.insertBefore($memoryCard5, null);
$memoryCard5.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard6.classList.add("memory-card");
$root.insertBefore($memoryCard6, null);
$memoryCard6.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard7.classList.add("memory-card");
$root.insertBefore($memoryCard7, null);
$memoryCard7.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard8.classList.add("memory-card");
$root.insertBefore($memoryCard8, null);
$memoryCard8.insertAdjacentHTML("afterbegin", $iconCollab);