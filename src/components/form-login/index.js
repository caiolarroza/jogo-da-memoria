const formLogin = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
            .form-signup {
                padding: 0 35px 40px;
            }
        `;

    $head.insertAdjacentElement("beforeend", $style);
  }

  module._children = () => {
    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render("caiolarroza");

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({ id: "password", placeholder: "8 digits", type: "password" });

    const $eyeCollabCode = eyeCollabCode.render({ attrFor: "password" });

    const $linkCollab = linkCollab.render({ href: "#", content: "Forgot password?" });

    const $btn = btnCollabcode.render({ content: "Login", path: "game" });

    return `
            ${$usernameLabel}
            ${$usernameInput}

            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabCode}

            ${$linkCollab}

            ${$btn}
        `
  }

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  }

  return {
    render: module.render
  }
})();
