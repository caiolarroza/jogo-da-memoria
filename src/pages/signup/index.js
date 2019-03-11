(function () {
    const $root = document.querySelector("#root");
    
    const $flatButton = flatButton.render();

    $root.insertAdjacentHTML("beforeend", "<h1>Welcome</h1>");
    $root.insertAdjacentHTML("beforeend", $flatButton);
    $root.insertAdjacentHTML("beforeend", $flatButton);
})();