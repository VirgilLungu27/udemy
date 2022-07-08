const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 15

for(let i = 0; i < rows * 4; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}`;
}

function getRandomSize() {
    return `${getrandomNr()}x${getRandomNr()}`
}
function getRandomNr() {
    return Math.floor(Math.random() * 15) + 300;
}