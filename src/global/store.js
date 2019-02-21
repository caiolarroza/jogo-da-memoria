const store = {
    arrClicked: [],
    score: 0
};

memoryCard.showScore();

$startButton = document.querySelector(".start-button");
$startButton.addEventListener("click", event => {
    startButton.hide();

    setTimeout(() => {
        darkLayer.hide();
    }, 500);
});