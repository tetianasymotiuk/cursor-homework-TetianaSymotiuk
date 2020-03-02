let container = document.getElementById('container');
const generateRandom = () => {
    return Math.random() * (255 - 1) + 1;
}

const generateBlocks = () => {
    for ( let i = 0; i < 25; i++) {
        let square = document.createElement('div');
        square.style.width='50px';
        square.style.height='50px';
        square.style.backgroundColor = `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`;
        container.appendChild(square);
    }
}

const generateBlocksInterval = () => {
    for(let i = 0; i < container.children.length; i++) {
        container.children[i].style.backgroundColor = `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`;
    }
}

generateBlocks();
setInterval(() => {
    generateBlocksInterval();
}, 1000);







