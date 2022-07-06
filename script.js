const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    label.innerHTML = value;
})