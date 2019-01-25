const createMemoryCard = (cardObj) => {
    console.log(cardObj.alt);
    
    return `
        <article class="memory-card ${cardObj.nameClass}">
            <img 
                src="${cardObj.src}" 
                alt="${cardObj.alt}" 
                class="icon"
                onClick="handleClick()"
            />
        </article>`;
}

function handleClick() {
    console.log("click");
}