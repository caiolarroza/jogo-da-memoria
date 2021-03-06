//object destructuring já recebendo como parãmentro as variáveis separadas
const memoryCard = (function() {

    const module = {};

    const create = () => {
        
        //object destructuring
        // const {src, alt, nameClass} = cardObj;
        const $head = document.querySelector("head");
        const $styleCard = document.createElement("style");
        
        $styleCard.textContent = `
        
        .memory-card { 
            width: 155px;
            height: 155px;
            position: relative;
        }
        
        .memory-card .card {
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
            position: absolute;
            /* margin: 16px;  minha forma de fazer*/ 
        }
        
        .memory-card.-active .card,
        .memory-card.-score .card {
            display: none;
        }
        
        .memory-card.-block {
            pointer-events: none;
        }
        
        .memory-card.-active .card.-front,
        .memory-card.-score .card.-front {
            display: flex;
        }
        
        .memory-card .card::selection {
            color: transparent;
        }
        
        .memory-card .card.-front {
            background-color: #fff;
            display: flex;
        }
        
        .memory-card .card.-front::before {
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }
        
        .memory-card .card > .icon {
            width: 100px;
            height: 100px;
        }
        
        .memory-card .card.-front > .icon {
            /* position: absolute; minha forma de fazer*/
            transform: translateY(-12px);
        }
        
        /* forma que fiz */
        
        /* @media (width: 375px) {
            .memory-card .card {
                width: 95px;
                height: 95px;
                margin: 16px 46px;
            }
            
            .memory-card .card.-front::before {
                width: 50px;
                height: 50px;
            }
            
            .memory-card .card > .icon {
                width: 50px;
                height: 50px;
            }
        } */`;
        
        $head.insertBefore($styleCard, null);
        
        return ({src, alt, nameClass}) => `
        <div class="memory-card" onClick="memoryCard.handleClick(this, '${src}')">
            <article class="card -front">
                <img 
                    src="${src}" 
                    alt="${alt}" 
                    class="icon"
                />
            </article>
            <article class="card">
                <img 
                src="img/icon-collabcode.png"
                alt="O mascote da Collabcode o Gueio" 
                class="icon"
                />
            </article>
        </div>
        `;
    };
    
    module._handleClick = ($component, src) => {
        
        if (!$component.classList.contains("-active")) {
            module._activeMemoryCard($component, src);
            module._checkSure();
        }
    }
    
    module._activeMemoryCard = ($component, src) => {
        if (qtdActiveMemoryCard < 2) {
            $component.classList.add("-active");
            store.arrClicked.push(src);
        }
    }
    
    module._checkSure = () => {
        const $activeMemoryCards = document.querySelectorAll(".memory-card.-active");
        
        if (qtdActiveMemoryCard == 1) {
            if (store.arrClicked[0] == store.arrClicked[1]) {
                $activeMemoryCards.forEach(($memoryCard) => {
                    $memoryCard.classList.add("-score");
                    $memoryCard.classList.remove("-active");
                });
                
                qtdActiveMemoryCard = 0;
                store.arrClicked = [];
                store.score++;

                module.showScore();
            } else {
                setTimeout(() => {                    
                    $activeMemoryCards.forEach(($memoryCard) => {
                        $memoryCard.classList.remove("-active");
                    });
                    
                    qtdActiveMemoryCard = 0;
                    store.arrClicked = [];
                    
                }, 1500);
            }
        }
    }

    module.showScore = () => {
        $pointBar = document.querySelector(".point-bar > .number");
        $pointBar.textContent = store.score;
    }

    //Da para dar o return de 3 formas: colocando o nome da func: nome da func, declarar a func dentro do próprio obj ou criar um module.
    //Com o module não da para acessarem a func fora do código. Underline(_) é uma boa pratica para mostrar que a func é privada
    return {
        create,
        handleClick: module._handleClick,
        showScore: module.showScore
    };
})();
    
// Meu código antigo
// const activeElements = document.getElementsByClassName("-active");

// if (activeElements.length === 2) {
    //     const notActive = document.querySelectorAll("div.memory-card:not(.-active)");
    //     notActive.forEach((item) => {
        //         item.classList.add("-block");
        //     });
        
        //     setTimeout(() => {
            //         activeElements[0].classList.remove("-active");
            //         activeElements[0].classList.remove("-active");
            //     }, 2000);
// } else {
//     const notActive = document.querySelectorAll("div.memory-card:not(.-active)");
//     notActive.forEach((item) => {
//         item.classList.remove("-block");
//     });
// }

// const fields = {
//     bug: {
//             src: "img/bug.png",
//             alt: "Ícone de um bug"
//         },
//     resp: {
//         src: "img/responsivo.png",
//         alt: "Ícone de responsividade"
//     },
//     java: {
//         src: "img/java.png",
//         alt: "Ícone de um livro de Java"
//     },
//     js: {
//         src: "img/js.png",
//         alt: "Ícone de um livro de JS"
//     },
//     woman: {
//         src: "img/woman.png",
//         alt: "Ícone de uma mulher programando"
//     },
//     gueio: {
//         src: "img/icon-collabcode.png",
//         alt: "Gueio mascote da CollabCode"
//     }
// };

// if (elemParent.classList.contains("-front")) {
//     $component.src = fields.gueio.src;
//     $component.alt = fields.gueio.alt;
// } else {
//     if (elemParent.classList.contains("-js")) {
//         $component.src = fields.js.src;
//         $component.alt = fields.js.alt;
//     } else if (elemParent.classList.contains("-bug")) {
//         $component.src = fields.bug.src;
//         $component.alt = fields.bug.alt;
//     }  else if (elemParent.classList.contains("-java")) {
//         $component.src = fields.java.src;
//         $component.alt = fields.java.alt;
//     }  else if (elemParent.classList.contains("-resp")) {
//         $component.src = fields.resp.src;
//         $component.alt = fields.resp.alt;
//     } else if (elemParent.classList.contains("-woman")) {
//         $component.src = fields.woman.src;
//         $component.alt = fields.woman.alt;
//     }
// }
// elemParent.classList.toggle("-front");