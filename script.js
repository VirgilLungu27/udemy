const container = document.getElementById('container');
const colors = ['white', 'grey', 'rebeccapurple', 'steelblue', 'darkred', 'darkgreen', 'lightblue', 'orange', 'yellow'];
const SQUARES = 499;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);
}
