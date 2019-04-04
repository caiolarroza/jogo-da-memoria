const flatButton = (function () {
    const module = {};

    module._id = 0;

    module._style = (active) => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        
        $style.textContent = `
            .flat-button-${module._id} {
                background-color: ${active ? "#f25a70" : "#eae6da"};
                display: inline-block;
                text-align: center;
                padding-top: 60px;
                box-sizing: border-box;
                text-decoration: none;
                color: ${active ? "#fff" : "#fffcee"};
                font-size: 24px;
                font-weight: bold;
                width: 50%;
                height: 176px;
                text-transform: uppercase;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);

    }
    //Para arrumar o botão usando button tem que colocar o display: inline-flex e adicionar o justify-content: center
    module.render = (content, active = false) => {
        module._id++;
        module._style(active);
        
        return `<a href="#" class="flat-button-${module._id}">${ content }</a>`;
    };

    return {
        render: module.render
    }
})()