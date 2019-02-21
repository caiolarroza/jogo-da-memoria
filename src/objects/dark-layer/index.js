
const darkLayer = (function() {

    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .dark-layer {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .3);
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <div class="dark-layer"></div>
        `;
    }

    return {
        render: module.render
    };
})();