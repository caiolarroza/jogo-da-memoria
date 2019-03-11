(function () {
    const $root = document.querySelector("#root");
    
    const $flatButtonLogin = flatButton.render("Login");
    const $flatButtonSignUp = flatButton.render("SignUp");

    $root.insertAdjacentHTML("beforeend", "<h1>Welcome</h1>");
    $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
    $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();