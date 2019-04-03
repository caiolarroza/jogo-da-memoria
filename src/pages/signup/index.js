(function () {
    const $root = document.querySelector("#root");
    
    const $loginButton = flatButton.render("Log in");
    const $signupButton = flatButton.render("Sign Up", true);
    
    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Welcome!");

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    console.log($logoWrapper);

    // $root.insertAdjacentHTML("beforeend", "<h1>Welcome</h1>");
    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
})();