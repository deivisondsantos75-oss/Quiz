const startBtn = document.getElementById('start-btn');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'perguntas.html';
    });
}

const bgMusic = document.getElementById('bg-music');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = soundToggle ? soundToggle.querySelector('.sound-icon') : null;

if (bgMusic && soundToggle) {
    bgMusic.volume = 0.5;

    function setSoundUI(isPlaying) {
        soundToggle.setAttribute('aria-pressed', String(isPlaying));
        soundToggle.setAttribute('aria-label', isPlaying ? 'Desativar som' : 'Ativar som');
        if (soundIcon) {
            soundIcon.textContent = isPlaying ? '🔊' : '🔇';
        }
    }

    function tryAutoplay() {
        bgMusic.play()
            .then(() => setSoundUI(true))
            .catch(() => {
                // Navegador bloqueou autoplay com som; aguarda o primeiro clique/tecla.
                setSoundUI(false);
                const resumeOnInteraction = () => {
                    bgMusic.play().then(() => setSoundUI(true)).catch(() => {});
                    document.removeEventListener('click', resumeOnInteraction);
                    document.removeEventListener('keydown', resumeOnInteraction);
                };
                document.addEventListener('click', resumeOnInteraction, { once: true });
                document.addEventListener('keydown', resumeOnInteraction, { once: true });
            });
    }

    soundToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bgMusic.paused) {
            bgMusic.play().then(() => setSoundUI(true)).catch(() => {});
        } else {
            bgMusic.pause();
            setSoundUI(false);
        }
    });

    tryAutoplay();
}
