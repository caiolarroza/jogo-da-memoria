let qtdActiveMemoryCard = 0;

function createCardsWrapper() {

    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");

    const $head = document.querySelector("head");
    const $styleWrapper = document.createElement("style");
    $styleWrapper.textContent = `
        .cards-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100vw;
        }
        
        .cards-wrapper > div {
            margin-bottom: 10px;
        }
    `;

    $head.insertBefore($styleWrapper, null);

    $cardsWrapper.addEventListener("click", event => {
        //Meu selector
        //qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active:not(.-found)").length;
        qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
        //$origin.closest(".memory-card.-active");
    })

    return $cardsWrapper;
}