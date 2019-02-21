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
                height: 70px;
                width: 70px;
                border-radius: 50%;
                border: none;
                background-color: #4cc34e;
                box-shadow: 1px 3px 8px #3a4042;
                cursor: pointer;
            }

            .start-button .play-icon {
                width: 24px;
            }

            .-hide {
                display: none;
                transition: opacity 600ms, visibility 600ms linear;
            }

        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();
        
        return `
            <button type="button" class="start-button">
                <img class="play-icon" src="../../img/play.svg">
            </button>
        `;
    }

    module.hide = () => {
        $startButton = document.querySelector(".start-button");
        // $startButton.setAttribute("hidden", "hidden");
        $startButton.classList.add("-hide");
    }

    return {
        render: module.render,
        hide: module.hide
    };

})();