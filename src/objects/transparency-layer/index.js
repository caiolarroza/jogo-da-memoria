
const transparencyLayer = (function() {

    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .transparency-layer {
                position: absolute;
                top: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, .3);
            }

            .-hide {
                display: none;
                transition: opacity 600ms, visibility 600ms linear;
            };
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <div class="transparency-layer"></div>
        `;
    }

    module.hide = () => {
        $transparencyLayer = document.querySelector(".transparency-layer");
        // $transparencyLayer.setAttribute("hidden", "hidden");
        $transparencyLayer.classList.add("-hide");
    }

    return {
        render: module.render,
        hide: module.hide
    };
})();