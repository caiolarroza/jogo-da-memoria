
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
                transition: opacity 300ms 200ms linear;
            }

            .transparency-layer.-disable {
                opacity: 0;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <div class="transparency-layer"></div>
        `;
    }

    return {
        render: module.render
    };
})();