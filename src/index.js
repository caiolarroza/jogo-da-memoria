const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");
const $memoryCard1 = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");

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

for (let i = 0; i <= 3; i++) {
    
    const $memoryCardL = document.createElement("article");
    const $memoryCardR = document.createElement("article");

    $memoryCardL.classList.add("memory-card");
    $root.insertBefore($memoryCardL, null);
    $memoryCardL.insertAdjacentHTML("afterbegin", $iconCollab);
    
    $memoryCardR.classList.add("memory-card");
    $root.insertBefore($memoryCardR, null);
    $memoryCardR.insertAdjacentHTML("afterbegin", $iconCollab);
    
}