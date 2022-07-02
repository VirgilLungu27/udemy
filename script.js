const imgs = document.getElementById('imgs');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;
let interval = setInterval(run, 1500);

function run() {
    idx++;

    changeImage();
}