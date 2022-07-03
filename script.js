const container = document.getElementById('container');
const colors = ['white', 'grey', 'rebeccapurple', 'steelblue', 'darkred', 'darkgreen', 'lightblue', 'orange', 'yellow'];
const SQUARES = 499;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}
