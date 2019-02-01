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
            display: none;
            /* margin: 16px;  minha forma de fazer*/ 
        }

        .memory-card .card::selection {
            color: transparent;
        }
    
        .memory-card .card.-front {
            background-color: #fff;
            display: block;
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
        <div class="memory-card">
            <article class="card -front">
                <img 
                    src="${src}" 
                    alt="${alt}" 
                    class="icon"
                    onClick="handleClick(this, this.parentNode)"
                />
            </article>
            <article class="card">
                <img 
                    src="img/icon-collabcode.png"
                    alt="O mascote da Collabcode o Gueio" 
                    class="icon"
                    onClick="handleClick(this, this.parentNode)"
                />
            </article>
        </div>
    `;
};

const handleClick = (elem, elemParent) => {
    const fields = {
        bug: {
                src: "img/bug.png",
                alt: "Ícone de um bug"
            },
        resp: {
            src: "img/responsivo.png",
            alt: "Ícone de responsividade"
        },
        java: {
            src: "img/java.png",
            alt: "Ícone de um livro de Java"
        },
        js: {
            src: "img/js.png",
            alt: "Ícone de um livro de JS"
        },
        woman: {
            src: "img/woman.png",
            alt: "Ícone de uma mulher programando"
        },
        gueio: {
            src: "img/icon-collabcode.png",
            alt: "Gueio mascote da CollabCode"
        }
    };

    if (elemParent.classList.contains("-front")) {
        elem.src = fields.gueio.src;
        elem.alt = fields.gueio.alt;
    } else {
        if (elemParent.classList.contains("-js")) {
            elem.src = fields.js.src;
            elem.alt = fields.js.alt;
        } else if (elemParent.classList.contains("-bug")) {
            elem.src = fields.bug.src;
            elem.alt = fields.bug.alt;
        }  else if (elemParent.classList.contains("-java")) {
            elem.src = fields.java.src;
            elem.alt = fields.java.alt;
        }  else if (elemParent.classList.contains("-resp")) {
            elem.src = fields.resp.src;
            elem.alt = fields.resp.alt;
        } else if (elemParent.classList.contains("-woman")) {
            elem.src = fields.woman.src;
            elem.alt = fields.woman.alt;
        }
    }
    
    elemParent.classList.toggle("-front");
}