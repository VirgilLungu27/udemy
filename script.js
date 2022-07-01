const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const text = 'we love programming.';
let idx = 1;
let speed = 300 / speedElement.nodeValue;

writeText();

function writeText() {
    textElement.innerText = text.slice(0, idx);
}
