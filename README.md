<a name="readme-top"></a>

<div align="center">

# Gênio Quiz de Front-End

Um quiz interativo sobre HTML, CSS e JavaScript, inspirado nos vídeos de Gênio Quiz que marcaram a infância de quem cresceu assistindo YouTube.

</div>

---

## Sobre o Projeto

O **Gênio Quiz de Front-End** é um quiz web que testa conhecimentos de HTML, CSS e JavaScript no formato clássico de perguntas e respostas com limite de erros, popularizado pelos vídeos de Gênio Quiz no YouTube. A ideia nasceu da vontade de unir aquele formato nostálgico a um propósito prático: revisar e fixar os fundamentos de desenvolvimento web estudados em sala de aula.

### Principais funcionalidades

- Vinte perguntas sobre HTML, CSS e JavaScript
- Limite de cinco erros, encerrando o jogo antes do fim caso seja atingido
- Placar de acertos e erros atualizado em tempo real
- Tela de resultado com mensagem de acordo com o desempenho
- Opção de refazer o quiz quantas vezes quiser

---

## Tecnologias Utilizadas

| Camada    | Tecnologia            |
|-----------|------------------------|
| Estrutura | HTML5                  |
| Estilo    | CSS3                   |
| Lógica    | JavaScript (Vanilla)   |
| Áudio     | Web Audio API          |

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## Arquitetura

O projeto segue o padrão de **separação por responsabilidade** (site estático, sem back-end ou banco de dados):

- **Estrutura (HTML)** — Marcação semântica das telas, definida em `index.html` e `perguntas.html`
- **Estilo (CSS)** — Estilos compartilhados entre as páginas, centralizados em `assets/css/main.css`
- **Lógica (JavaScript)** — Regras do quiz, Web Components e feedback sonoro, divididos entre `script.js`, `quiz.js` e `components.js`

```
genio-quiz-frontend/
├── index.html
├── perguntas.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── components.js
│   │   ├── script.js
│   │   └── quiz.js
│   └── sounds/
│       ├── correct.mp3
│       └── wrong.mp3
└── README.md
```

| Arquivo                    | Responsabilidade                                                           |
|------------------------------|------------------------------------------------------------------------------|
| `index.html`                | Tela inicial, com o botão de início do quiz                                |
| `perguntas.html`            | Tela do quiz, onde as perguntas, o resultado e o gabarito são renderizados |
| `assets/css/main.css`       | Estilos compartilhados entre as páginas                                    |
| `assets/js/components.js`   | Header e footer reutilizáveis, definidos como Web Components               |
| `assets/js/script.js`       | Lógica da tela inicial (redirecionamento para o quiz)                      |
| `assets/js/quiz.js`         | Lógica do quiz: banco de perguntas, pontuação, feedback sonoro, resultado e gabarito |

Como `index.html` e `perguntas.html` ficam na raiz do projeto, as duas páginas referenciam os arquivos de `assets/` com o mesmo caminho relativo, sem precisar subir níveis (`../`).

O header (`<site-header>`) e o footer (`<site-footer>`) são componentes customizados definidos uma única vez em `components.js` e reutilizados em `index.html` e `perguntas.html`, evitando duplicar o mesmo HTML nas duas páginas.

Cada pergunta em `quiz.js` guarda também uma explicação (`explanation`). Toda resposta marcada pelo usuário é armazenada em memória durante a sessão, e ao final do quiz a tela de resultado mostra o gabarito completo: a resposta escolhida, a resposta correta (quando errada) e a explicação de cada pergunta, atrás de um botão "Ver gabarito".

**Fluxo de dados:**

```
Navegador  ←→  HTML + CSS  ←→  DOM  ←→  JavaScript (components.js / script.js / quiz.js)
                                              ↕
                                     Web Audio API (feedback sonoro)
```

---

## Como Começar

### Pré-requisitos

Não é necessária nenhuma instalação. O projeto é feito em HTML, CSS e JavaScript puros, executados diretamente no navegador.

### Instalação

**1. Clone o repositório**

```
git clone https://github.com/seu-usuario/genio-quiz-frontend.git
cd genio-quiz-frontend
```

**2. Como rodar**

Basta abrir o arquivo `index.html` no navegador, ou usar uma extensão como o Live Server no VS Code para servir os arquivos localmente.

---

## Fluxo de Funcionamento

1. Usuário acessa o Gênio Quiz de Front-End
2. Clica em "Iniciar" na tela inicial
3. É redirecionado para a tela de perguntas
4. Responde às perguntas de HTML, CSS e JavaScript
5. Acompanha o placar de acertos e erros em tempo real
6. Ao completar as perguntas ou atingir 5 erros, vê o resultado final
7. Pode refazer o quiz a qualquer momento

---

## Roadmap

- [x] Definição do formato do quiz
- [x] Levantamento das perguntas de HTML, CSS e JavaScript
- [x] Implementação da tela inicial
- [x] Implementação da tela de perguntas
- [x] Sistema de pontuação e limite de erros
- [x] Feedback sonoro de acerto e erro
- [ ] Novas categorias de perguntas
- [ ] Ranking de pontuações

---

## Contribuindo

Contribuições são bem-vindas. Se tiver sugestões para melhorar o projeto:

1. Faça um Fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## Contato

**Equipe Gênio Quiz de Front-End**

Deivison Dos Santos, Rafael Tamy, Cauã Eduardo e Davi Ribeiro

Link do repositório: [github.com/seu-usuario/genio-quiz-frontend](https://github.com/seu-usuario/genio-quiz-frontend)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
