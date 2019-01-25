const createMemoryCard = (src, alt, nameClass) => {
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