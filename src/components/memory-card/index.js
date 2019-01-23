function createMemoryCard() {
    
    const $memoryCard = document.createElement("article");

    const $iconCollab = `<img 
    src='img/icon-collabcode.png' 
    alt='Gueio mascote da CollabCode' 
    class='icon'>`;
    
    $memoryCard.classList.add("memory-card");
    $wrapCards.insertBefore($memoryCard, null);
    
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {

    const $memoryCardFront = document.createElement("article");

    const $iconJs = `<img 
    src='img/js.png' 
    alt='Gueio mascote da CollabCode' 
    class='icon'>`;

    $memoryCardFront.classList.add("memory-card");
    $memoryCardFront.classList.add("-front");
    $wrapCards.insertBefore($memoryCardFront, null);

    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
}

function getMouseClick() {
    console.log("click");
}