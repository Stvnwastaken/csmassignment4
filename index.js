document.getElementById('background-select').addEventListener('change', () => {
    const selectedBackground = document.getElementById('background-select').value;
    document.body.style.backgroundImage = `url(/assets/${selectedBackground}.jpg)`;
    document.body.style.backgroundSize = 'cover';
});