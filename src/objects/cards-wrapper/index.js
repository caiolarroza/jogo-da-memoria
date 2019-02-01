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
        }`;

        $head.insertBefore($styleWrapper, null)

    return $cardsWrapper;
}