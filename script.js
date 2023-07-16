// Matrix rain effect
const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{};:"|,.<>?/`~';
const columns = canvas.width / 15;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = '15px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
        ctx.fillText(text, i * 15, drops[i] * 15);
        
        if (drops[i] * 15 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrixRain, 50);

// Navigation
document.getElementById('searchButton')?.addEventListener('click', () => navigateToPage(document.getElementById('searchInput').value.toLowerCase().trim()));
document.getElementById('searchInput')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        navigateToPage(this.value.toLowerCase().trim());
    }
});

function navigateToPage(pageName) {
    const pageMapping = {
        'home': 'index.html',
        'about': 'about.html',
        'webdev': 'webdev.html',
        'cv': 'cv.html',
        'social': 'social.html'
    };

    const fileName = pageMapping[pageName];

    if (fileName) {
        window.location.href = fileName;
    } else {
        alert('Page not found. Please enter a valid page name.');
    }
}
