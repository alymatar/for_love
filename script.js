// script.js

function getRandomColor() {
    // Define the range of colors from red to purple
    const colors = [
        "#ff0000", // Red
        "#ff0040",
        "#ff0080",
        "#ff00bf",
        "#ff00ff", // Magenta
        "#bf00ff",
        "#8000ff",
        "#4000ff",
        "#0000ff"  // Purple
    ];
    // Return a random color from the array
    return colors[Math.floor(Math.random() * colors.length)];
}

function createWord() {
    const container = document.getElementById('container');
    const word = document.createElement('div');
    word.className = 'word';
    word.textContent = 'I love you';

    // Apply a random color to the word
    word.style.color = getRandomColor();

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    word.style.left = `${x}px`;
    word.style.top = `${y}px`;

    container.appendChild(word);

    setTimeout(() => {
        container.removeChild(word);
    }, 3000); // Match this duration with the CSS animation duration
}

function startEffect() {
    setInterval(createWord, 500); // Adjust this interval for more or less frequent words
}

window.onload = startEffect;
