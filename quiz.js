// quiz.js
// Lógica do quiz: renderiza perguntas, valida respostas, controla pontuação
// e exibe o resultado final. Todo o conteúdo é gerado dinamicamente a
// partir do array `questions`, então adicionar uma pergunta nova é só
// adicionar um novo objeto no array abaixo.

const questions = [
    {
        question: "O que significa a sigla HTML?",
        options: [
            "High Text Machine Language",
            "HyperText Markup Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctIndex: 1
    },
    {
        question: "Qual tag HTML é usada para criar um link?",
        options: ["<link>", "<a>", "<href>", "<nav>"],
        correctIndex: 1
    },
    {
        question: "Em CSS, qual propriedade controla o espaçamento interno de um elemento?",
        options: ["margin", "padding", "spacing", "gap"],
        correctIndex: 1
    },
    {
        question: "Qual valor de 'display' em CSS transforma um elemento em um contêiner flexível?",
        options: ["block", "inline", "flex", "grid-row"],
        correctIndex: 2
    },
    {
        question: "Em JavaScript, qual método é usado para selecionar um elemento pelo seu id?",
        options: [
            "document.querySelectorId()",
            "document.getElementById()",
            "document.selectById()",
            "document.findId()"
        ],
        correctIndex: 1
    },
    {
        question: "Qual palavra-chave declara uma variável cujo valor não pode ser reatribuído?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        question: "O que o atributo 'defer' faz em uma tag <script>?",
        options: [
            "Impede o script de ser executado",
            "Executa o script antes do HTML carregar",
            "Adia a execução do script até o HTML ser totalmente processado",
            "Carrega o script em uma nova aba"
        ],
        correctIndex: 2
    },
    {
        question: "Qual seletor CSS tem a maior especificidade?",
        options: [
            "Seletor de classe (.exemplo)",
            "Seletor de elemento (div)",
            "Seletor de id (#exemplo)",
            "Seletor universal (*)"
        ],
        correctIndex: 2
    }
];

// ---------- Estado do quiz ----------

let currentIndex = 0;
let score = 0;
let answered = false;

// ---------- Referências do DOM ----------

const progressCurrent = document.getElementById('progress-current');
const progressScore = document.getElementById('progress-score');
const progressFill = document.getElementById('progress-fill');

const quizCard = document.getElementById('quiz-card');
const questionEyebrow = document.getElementById('question-eyebrow');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

const resultsCard = document.getElementById('results-card');
const resultsScore = document.getElementById('results-score');
const resultsMessage = document.getElementById('results-message');
const restartBtn = document.getElementById('restart-btn');

const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

// ---------- Renderização ----------

function renderQuestion() {
    answered = false;
    feedback.textContent = '';
    feedback.className = 'feedback';
    nextBtn.disabled = true;

    const current = questions[currentIndex];

    questionEyebrow.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
    questionText.textContent = current.question;

    progressCurrent.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
    progressScore.textContent = `Acertos: ${score}`;
    progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;

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

    // Desabilita todas as opções e marca a correta/errada
    const allButtons = optionsList.querySelectorAll('.option');
    allButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === current.correctIndex) {
            btn.classList.add('correct');
        }
    });

    if (isCorrect) {
        score++;
        feedback.textContent = 'Resposta correta!';
        feedback.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
        feedback.textContent = 'Resposta incorreta.';
        feedback.classList.add('wrong');
    }

    progressScore.textContent = `Acertos: ${score}`;
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (!answered) return;

    currentIndex++;

    if (currentIndex < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    progressFill.style.width = '100%';
    progressCurrent.textContent = `Pergunta ${questions.length} de ${questions.length}`;

    quizCard.hidden = true;
    resultsCard.hidden = false;

    resultsScore.textContent = `${score} / ${questions.length}`;

    const percentage = Math.round((score / questions.length) * 100);
    let message;

    if (percentage === 100) {
        message = 'Perfeito! Você acertou tudo.';
    } else if (percentage >= 70) {
        message = 'Muito bom! Você manda bem em Front-End.';
    } else if (percentage >= 40) {
        message = 'Você foi bem, mas vale revisar alguns tópicos.';
    } else {
        message = 'Vale a pena revisar o conteúdo e tentar de novo.';
    }

    resultsMessage.textContent = message;
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    answered = false;

    resultsCard.hidden = true;
    quizCard.hidden = false;

    renderQuestion();
}

// ---------- Eventos ----------

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// ---------- Início ----------

renderQuestion();
