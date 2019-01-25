const createMemoryCard = (isFront) => {

    if (isFront) {
        return `
            <article class="memory-card -front">
                <img 
                    src='img/js.png' 
                    alt='Javascript' 
                    class='icon'
                    onClick='handleClick()'
                />
            </article>
        `;
    } else {
        return `
        <article class="memory-card">
            <img 
                src='img/icon-collabcode.png' 
                alt='Gueio mascote da CollabCode' 
                class='icon'
                onClick='handleClick()'
            />
        </article>
    `;
    }
}

function handleClick() {
    console.log("click");
}