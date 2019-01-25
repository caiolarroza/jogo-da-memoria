//object destructuring já recebendo como parãmentro as variáveis separadas
const createMemoryCard = ({src, alt, nameClass}) => {
    
    //object destructuring
    // const {src, alt, nameClass} = cardObj;
    
    return `
        <article class="memory-card ${nameClass}">
            <img 
                src="${src}" 
                alt="${alt}" 
                class="icon"
                onClick="handleClick()"
            />
        </article>`;
}

function handleClick() {
    console.log("click");
}