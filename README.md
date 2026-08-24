<a name="readme-top"></a>

<!-- BADGES -->
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>
<br />
<div align="center">
  <h1 align="center">Gênio Quiz de Front-End</h1>

  <p align="center">
    Um quiz interativo sobre HTML, CSS e JavaScript, inspirado nos vídeos de Gênio Quiz que marcaram a infância de quem cresceu assistindo YouTube.
    <br />
    <br />
    <br />
    <a href="https://github.com/seu-usuario/genio-quiz-frontend/issues/new?labels=bug">Reportar Bug</a>
    ·
    <a href="https://github.com/seu-usuario/genio-quiz-frontend/issues/new?labels=enhancement">Sugerir Feature</a>
  </p>
</div>

---

## Sobre o Projeto

O **Gênio Quiz de Front-End** é um quiz web que testa conhecimentos de HTML, CSS e JavaScript no formato clássico de perguntas e respostas com limite de erros, popularizado pelos vídeos de Gênio Quiz no YouTube. A ideia nasceu da vontade de unir aquele formato nostálgico a um propósito prático: revisar e fixar os fundamentos de desenvolvimento web estudados em sala de aula.

### Principais funcionalidades:

- Vinte perguntas sobre HTML, CSS e JavaScript
- Limite de cinco erros, encerrando o jogo antes do fim caso seja atingido
- Placar de acertos e erros atualizado em tempo real
- Tela de resultado com mensagem de acordo com o desempenho
- Opção de refazer o quiz quantas vezes quiser

---

## Tecnologias Utilizadas

| Camada    | Tecnologia                                                        |
|-----------|--------------------------------------------------------------------|
| Estrutura | [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)         |
| Estilo    | [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)           |
| Lógica    | [JavaScript (Vanilla)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| Áudio     | [Web Audio API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Audio_API) |

[![HTML5][HTML-badge]][HTML-url]
[![CSS3][CSS-badge]][CSS-url]
[![JavaScript][JS-badge]][JS-url]

---

## Arquitetura

O projeto é um site estático de múltiplas páginas, sem back-end ou banco de dados:

- **index.html** — tela inicial, com o botão de início do quiz
- **perguntas.html** — tela do quiz, onde as perguntas são renderizadas
- **main.css** — estilos compartilhados entre as páginas
- **script.js** — lógica da tela inicial (redirecionamento para o quiz)
- **quiz.js** — lógica do quiz: banco de perguntas, pontuação, feedback sonoro e resultado

```
Navegador (HTML + CSS) ←──── DOM ────→ JavaScript (quiz.js / script.js)
```

---

## Como Começar

### Pré-requisitos

Não é necessária nenhuma instalação: o projeto é feito em HTML, CSS e JavaScript puros, executados diretamente no navegador.

### Instalação

#### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/genio-quiz-frontend.git
cd genio-quiz-frontend
```

#### 2. Como Rodar

Basta abrir o arquivo `index.html` no navegador, ou usar uma extensão como o Live Server no VS Code para servir os arquivos localmente.

---

## Fluxo de Funcionamento

```
1. Usuário acessa o Gênio Quiz de Front-End
       ↓
2. Clica em "Iniciar" na tela inicial
       ↓
3. É redirecionado para a tela de perguntas
       ↓
4. Responde às perguntas de HTML, CSS e JavaScript
       ↓
5. Acompanha o placar de acertos e erros em tempo real
       ↓
6. Ao completar as perguntas ou atingir 5 erros, vê o resultado final
       ↓
7. Pode refazer o quiz a qualquer momento
```

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

Link do Repositório: [github.com/seu-usuario/genio-quiz-frontend](https://github.com/seu-usuario/genio-quiz-frontend)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

---

[contributors-shield]: https://img.shields.io/github/contributors/seu-usuario/genio-quiz-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/seu-usuario/genio-quiz-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/seu-usuario/genio-quiz-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/seu-usuario/genio-quiz-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/seu-usuario/genio-quiz-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/seu-usuario/genio-quiz-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/seu-usuario/genio-quiz-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/seu-usuario/genio-quiz-frontend/issues
[license-shield]: https://img.shields.io/github/license/seu-usuario/genio-quiz-frontend.svg?style=for-the-badge
[license-url]: https://github.com/seu-usuario/genio-quiz-frontend/blob/main/LICENSE

[HTML-badge]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/pt-BR/docs/Web/HTML
[CSS-badge]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
[JS-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JS-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

© 2026 · Feito por Deivison Dos Santos, Rafael Tamy, Cauã Eduardo e Davi Ribeiro