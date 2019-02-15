const startButton = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .start-button {
                position: fixed;
                bottom: 10px;
                right: 10px;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                border: none;
                background-color: #4cc34e;
            }

            .start-button .play-icon {
                width: 24px;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return `
            <button type="button" class="start-button">
                <img class="play-icon" src="../../img/play.svg">
            </button>
        `;
    }

    return {
        create: module.create
    };

})();