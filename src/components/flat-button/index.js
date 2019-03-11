const flatButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .flat-button {
                background-color: #eae6da;
                color: #fffcee;
                font-size: 24px;
                font-weight: bold;
                width: 186px;
                height: 176px;
                text-transform: uppercase;
            };
        `;

        $head.insertAdjacentElement("beforeend", $style);

    }

    module.render = (label) => {
        console.log("label ", label);
        module._style();
        return `<button class="flat-button">${label}</button>`;
    };

    return {
        render: module.render
    }
})()