const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'message one',
    'message two',
    'message three',
    'message four',
];

button.addEventListener('click', () => createNotification('this is invalid data', 'success'));

function createNotification(message = null, type = null) {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(type ? type : 'info');

    notification.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];   
}