const questions = [
    {
        question: "O que significa a sigla HTML?",
        options: [
            "High Text Machine Language",
            "HyperText Markup Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctIndex: 1,
        explanation: "HTML significa HyperText Markup Language (Linguagem de Marcação de Hipertexto), a linguagem usada para estruturar o conteúdo das páginas web."
    },
    {
        question: "Qual tag HTML é usada para criar um link?",
        options: ["<link>", "<a>", "<href>", "<nav>"],
        correctIndex: 1,
        explanation: "A tag <a> (anchor) é usada para criar links. O destino é definido pelo atributo href, que não é uma tag em si."
    },
    {
        question: "Qual tag é usada para inserir uma imagem em uma página HTML?",
        options: ["<image>", "<picture>", "<img>", "<src>"],
        correctIndex: 2,
        explanation: "A tag <img> insere imagens na página. O atributo src indica o caminho do arquivo, mas src sozinho não é uma tag."
    },
    {
        question: "Qual elemento semântico HTML representa o conteúdo principal de uma página?",
        options: ["<section>", "<main>", "<content>", "<body>"],
        correctIndex: 1,
        explanation: "A tag <main> representa o conteúdo principal e único da página, diferente de <body>, que envolve toda a página, incluindo header e footer."
    },
    {
        question: "Qual atributo define um texto alternativo para uma imagem, usado por leitores de tela?",
        options: ["title", "alt", "description", "label"],
        correctIndex: 1,
        explanation: "O atributo alt fornece uma descrição textual da imagem, essencial para acessibilidade e para quando a imagem não carrega."
    },

    {
        question: "Em CSS, qual propriedade controla o espaçamento interno de um elemento?",
        options: ["margin", "padding", "spacing", "gap"],
        correctIndex: 1,
        explanation: "padding controla o espaçamento interno, entre o conteúdo e a borda do elemento. margin controla o espaçamento externo."
    },
    {
        question: "Qual valor de 'display' em CSS transforma um elemento em um contêiner flexível?",
        options: ["block", "inline", "flex", "grid-row"],
        correctIndex: 2,
        explanation: "display: flex transforma o elemento em um flex container, permitindo organizar os filhos em linha ou coluna com alinhamento flexível."
    },
    {
        question: "Qual seletor CSS tem a maior especificidade?",
        options: [
            "Seletor de classe (.exemplo)",
            "Seletor de elemento (div)",
            "Seletor de id (#exemplo)",
            "Seletor universal (*)"
        ],
        correctIndex: 2,
        explanation: "Seletores de id têm a maior especificidade entre essas opções, seguidos por classes, depois elementos, e por último o seletor universal."
    },
    {
        question: "Qual unidade de medida em CSS é relativa ao tamanho da fonte do elemento pai?",
        options: ["px", "em", "vh", "deg"],
        correctIndex: 1,
        explanation: "em é relativa ao tamanho da fonte do elemento pai. px é um valor fixo, vh é relativo à altura da viewport e deg mede ângulos."
    },
    {
        question: "Qual propriedade CSS controla o espaçamento externo de um elemento?",
        options: ["padding", "border", "margin", "outline"],
        correctIndex: 2,
        explanation: "margin controla o espaço fora da borda do elemento, empurrando outros elementos para longe dele."
    },

    {
        question: "Em JavaScript, qual método é usado para selecionar um elemento pelo seu id?",
        options: [
            "document.querySelectorId()",
            "document.getElementById()",
            "document.selectById()",
            "document.findId()"
        ],
        correctIndex: 1,
        explanation: "document.getElementById() retorna o elemento que possui o id informado. Os outros métodos citados não existem no DOM."
    },
    {
        question: "Qual palavra-chave declara uma variável cujo valor não pode ser reatribuído?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2,
        explanation: "const declara uma variável cuja referência não pode ser reatribuída após a criação. let e var permitem reatribuição."
    },
    {
        question: "Qual método é usado para adicionar um evento de clique a um elemento?",
        options: ["addEventListener()", "onClick()", "attachEvent()", "listenTo()"],
        correctIndex: 0,
        explanation: "addEventListener() é o método padrão para associar eventos, como 'click', a um elemento do DOM."
    },
    {
        question: "Qual método de array executa uma função para cada elemento dele?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        correctIndex: 1,
        explanation: "forEach() executa uma função para cada elemento do array, sem retornar um novo array (diferente de map())."
    },
    {
        question: "Qual operador verifica igualdade de valor e tipo em JavaScript?",
        options: ["==", "=", "===", "!="],
        correctIndex: 2,
        explanation: "=== compara valor e tipo (igualdade estrita). == compara apenas o valor, convertendo tipos quando necessário."
    },

    {
        question: "O que o atributo 'defer' faz em uma tag <script>?",
        options: [
            "Impede o script de ser executado",
            "Executa o script antes do HTML carregar",
            "Adia a execução do script até o HTML ser totalmente processado",
            "Carrega o script em uma nova aba"
        ],
        correctIndex: 2,
        explanation: "defer adia a execução do script até que o HTML tenha sido completamente processado, sem bloquear a renderização da página."
    },
    {
        question: "Para que servem as media queries em CSS?",
        options: [
            "Para adaptar o layout a diferentes tamanhos de tela",
            "Para tocar áudio na página",
            "Para consultar um banco de dados",
            "Para importar fontes externas"
        ],
        correctIndex: 0,
        explanation: "Media queries permitem aplicar estilos diferentes conforme características da tela, como largura, sendo a base do design responsivo."
    },
    {
        question: "O que significa a sigla DOM, usada em JavaScript?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Display Order Manager",
            "Design Object Method"
        ],
        correctIndex: 1,
        explanation: "DOM significa Document Object Model: a representação em forma de objetos da estrutura do documento HTML, manipulável via JavaScript."
    },
    {
        question: "Qual ferramenta é amplamente usada para versionamento de código em projetos de front-end?",
        options: ["Git", "Figma", "Photoshop", "Postman"],
        correctIndex: 0,
        explanation: "Git é o sistema de controle de versão mais usado para rastrear mudanças no código. Figma, Photoshop e Postman têm outras finalidades."
    },
    {
        question: "O que significa a abordagem 'mobile first' no design responsivo?",
        options: [
            "Testar o site só em celulares",
            "Projetar primeiro para telas pequenas e depois expandir para telas maiores",
            "Usar apenas aplicativos mobile",
            "Bloquear o acesso via desktop"
        ],
        correctIndex: 1,
        explanation: "Mobile first significa projetar o layout primeiro para telas pequenas e depois adaptá-lo para telas maiores, usando media queries."
    }
];
const MAX_WRONG_ANSWERS = 5;

let currentIndex = 0;
let score = 0;
let wrongCount = 0;
let answered = false;
let gameOver = false;

const quizCard = document.getElementById('quiz-card');
const questionEyebrow = document.getElementById('question-eyebrow');
const questionStats = document.getElementById('question-stats');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedback = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const nextBtn = document.getElementById('next-btn');

const resultsCard = document.getElementById('results-card');
const resultsScore = document.getElementById('results-score');
const resultsMessage = document.getElementById('results-message');
const restartBtn = document.getElementById('restart-btn');

const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
    }
    return audioCtx;
}

function playTone(freq, startOffset, duration, type, peakGain) {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    const startTime = ctx.currentTime + startOffset;

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(peakGain, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
}

function playCorrectSound() {
    try {
        playTone(523.25, 0, 0.14, 'sine', 0.18);   // C5
        playTone(783.99, 0.1, 0.22, 'sine', 0.18); // G5
    } catch (err) {

    }
}

function playWrongSound() {
    try {
        playTone(220, 0, 0.22, 'sawtooth', 0.12);
        playTone(155, 0.07, 0.26, 'sawtooth', 0.1);
    } catch (err) {

    }
}


function renderQuestion() {
    answered = false;
    feedback.textContent = '';
    feedback.className = 'feedback';
    explanationEl.textContent = '';
    explanationEl.hidden = true;
    nextBtn.disabled = true;

    const isLastQuestion = currentIndex === questions.length - 1;
    nextBtn.textContent = isLastQuestion ? 'Ver Resultado' : 'Próxima';

    const current = questions[currentIndex];

    questionEyebrow.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
    questionText.textContent = current.question;

    questionStats.textContent = `Acertos: ${score} · Erros: ${wrongCount}/${MAX_WRONG_ANSWERS}`;

    optionsList.innerHTML = '';

    current.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.type = 'button';

        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = `[${optionLetters[index]}]`;

        const label = document.createElement('span');
        label.textContent = optionText;

        button.appendChild(tag);
        button.appendChild(label);

        button.addEventListener('click', () => selectOption(index, button));

        optionsList.appendChild(button);
    });
}

function selectOption(selectedIndex, selectedButton) {
    if (answered) return;
    answered = true;

    const current = questions[currentIndex];
    const isCorrect = selectedIndex === current.correctIndex;

    const allButtons = optionsList.querySelectorAll('.option');
    allButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === current.correctIndex) {
            btn.classList.add('correct');
            addOptionIcon(btn, '✓');
        }
    });

    if (isCorrect) {
        score++;
        feedback.innerHTML = '<span class="feedback-icon">✓</span> Resposta correta!';
        feedback.classList.add('correct');
        quizCard.classList.add('flash-correct');
        playCorrectSound();
    } else {
        wrongCount++;
        selectedButton.classList.add('wrong');
        addOptionIcon(selectedButton, '✕');
        feedback.innerHTML = '<span class="feedback-icon">✕</span> Resposta incorreta.';
        feedback.classList.add('wrong');
        quizCard.classList.add('flash-wrong');
        playWrongSound();

        if (wrongCount >= MAX_WRONG_ANSWERS) {
            gameOver = true;
        }
    }

    explanationEl.textContent = current.explanation;
    explanationEl.hidden = false;

    setTimeout(() => {
        quizCard.classList.remove('flash-correct', 'flash-wrong');
    }, 650);

    questionStats.textContent = `Acertos: ${score} · Erros: ${wrongCount}/${MAX_WRONG_ANSWERS}`;

    const isLastQuestion = currentIndex === questions.length - 1;
    nextBtn.textContent = (isLastQuestion || gameOver) ? 'Ver Resultado' : 'Próxima';
    nextBtn.disabled = false;
}

function addOptionIcon(button, symbol) {
    const icon = document.createElement('span');
    icon.className = 'option-icon';
    icon.textContent = symbol;
    button.appendChild(icon);
}

function nextQuestion() {
    if (!answered) return;

    if (gameOver) {
        showResults();
        return;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const questionsSeen = currentIndex + 1;

    quizCard.hidden = true;
    resultsCard.hidden = false;

    resultsScore.textContent = `${score} / ${questions.length}`;
    resultsScore.classList.toggle('game-over', gameOver);

    let message;

    if (gameOver) {
        message = `Fim de jogo! Você atingiu o limite de ${MAX_WRONG_ANSWERS} erros na pergunta ${questionsSeen} de ${questions.length}.`;
    } else {
        const percentage = Math.round((score / questions.length) * 100);

        if (percentage === 100) {
            message = 'Perfeito! Você acertou tudo.';
        } else if (percentage >= 70) {
            message = 'Muito bom! Você manda bem em Front-End.';
        } else if (percentage >= 40) {
            message = 'Você foi bem, mas vale revisar alguns tópicos.';
        } else {
            message = 'Vale a pena revisar o conteúdo e tentar de novo.';
        }
    }

    resultsMessage.textContent = message;
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    wrongCount = 0;
    answered = false;
    gameOver = false;

    resultsScore.classList.remove('game-over');
    resultsCard.hidden = true;
    quizCard.hidden = false;

    renderQuestion();
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

renderQuestion();
