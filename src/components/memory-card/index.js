//object destructuring já recebendo como parãmentro as variáveis separadas
const memoryCard = () => {
    
    //object destructuring
    // const {src, alt, nameClass} = cardObj;
    
    const $head = document.querySelector("head");
    const $styleCard = document.createElement("style");
    
    $styleCard.textContent = `
        .memory-card {
            width: 155px;
            height: 155px;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            /* display: inline-flex; minha forma de fazer */
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            position: relative;
            cursor: pointer;
            /* margin: 16px;  minha forma de fazer*/ 
        }
    
        .memory-card.-front {
            background-color: #fff;
        }
    
        .memory-card.-front::before {
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }
    
        .memory-card > .icon {
            width: 100px;
            height: 100px;
        }
    
        .memory-card.-front > .icon {
            /* position: absolute; minha forma de fazer*/
            transform: translateY(-12px);
        }
    
        /* forma que fiz */
    
        /* @media (width: 375px) {
            .memory-card {
                width: 95px;
                height: 95px;
                margin: 16px 46px;
            }
    
            .memory-card.-front::before {
                width: 50px;
                height: 50px;
            }
            
            .memory-card > .icon {
                width: 50px;
                height: 50px;
            }
        } */`;
    
    $head.insertBefore($styleCard, null);
    
    return ({src, alt, nameClass}) => `
        <article class="memory-card ${nameClass}">
            <img 
                src="${src}" 
                alt="${alt}" 
                class="icon"
                onClick="handleClick()"
            />
        </article>
    `;
};

const handleClick = () => {
    console.log("click");
    // this.classList.toggle("-front");
}