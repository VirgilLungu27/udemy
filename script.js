const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelectorAll('#panel');

panel.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active')
    }
})