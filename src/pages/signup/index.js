(function () {
    const $root = document.querySelector("#root");
    
    const $loginButton = flatButton.render("Log in");
    const $signupButton = flatButton.render("Sign Up", true);

    $root.insertAdjacentHTML("beforeend", "<h1>Welcome</h1>");
    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
})();