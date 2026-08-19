// script.js
// Lógica da página inicial (index.html): apenas redireciona para o quiz.

const startBtn = document.getElementById('start-btn');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'perguntas.html';
    });
}
