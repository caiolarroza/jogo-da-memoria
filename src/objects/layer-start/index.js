const layerStart = (function() {
    const module = {};

    module.handleClick = $component => {
        $component.remove();
    }

    module.render = () => {

        const $transparencyLayer = transparencyLayer.render();
        const $startButton = startButton.render();

        console.log("asd");

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)">
                ${ $transparencyLayer }
                ${ $startButton }
            </div>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };

})();