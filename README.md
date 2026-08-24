Sobre o Projeto

O Gênio Quiz de Front-End é um quiz web que testa conhecimentos de HTML, CSS e JavaScript no formato clássico de perguntas e respostas com limite de erros, popularizado pelos vídeos de Gênio Quiz no YouTube. A ideia nasceu da vontade de unir aquele formato nostálgico a um propósito prático: revisar e fixar os fundamentos de desenvolvimento web estudados em sala de aula.

Principais funcionalidades:
Vinte perguntas sobre HTML, CSS e JavaScript
Limite de cinco erros, encerrando o jogo antes do fim caso seja atingido
Placar de acertos e erros atualizado em tempo real
Tela de resultado com mensagem de acordo com o desempenho
Opção de refazer o quiz quantas vezes quiser
Tecnologias Utilizadas
Camada	Tecnologia
Estrutura	HTML5
Estilo	CSS3
Lógica	JavaScript (Vanilla)
Áudio	Web Audio API

Mostrar Imagem Mostrar Imagem Mostrar Imagem

Arquitetura

O projeto é um site estático de múltiplas páginas, sem back-end ou banco de dados:

index.html — tela inicial, com o botão de início do quiz
perguntas.html — tela do quiz, onde as perguntas são renderizadas
main.css — estilos compartilhados entre as páginas
script.js — lógica da tela inicial (redirecionamento para o quiz)
quiz.js — lógica do quiz: banco de perguntas, pontuação, feedback sonoro e resultado
Navegador (HTML + CSS) ←──── DOM ────→ JavaScript (quiz.js / script.js)
Como Começar
Pré-requisitos

Não é necessária nenhuma instalação: o projeto é feito em HTML, CSS e JavaScript puros, executados diretamente no navegador.

Instalação
1. Clone o repositório
bash
git clone https://github.com/seu-usuario/genio-quiz-frontend.git
cd genio-quiz-frontend
2. Como Rodar

Basta abrir o arquivo index.html no navegador, ou usar uma extensão como o Live Server no VS Code para servir os arquivos localmente.

Fluxo de Funcionamento
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
Roadmap
 Definição do formato do quiz
 Levantamento das perguntas de HTML, CSS e JavaScript
 Implementação da tela inicial
 Implementação da tela de perguntas
 Sistema de pontuação e limite de erros
 Feedback sonoro de acerto e erro
 Novas categorias de perguntas
 Ranking de pontuações
Contribuindo

Contribuições são bem-vindas. Se tiver sugestões para melhorar o projeto:

Faça um Fork do projeto
Crie sua branch de feature (git checkout -b feature/MinhaFeature)
Commit suas mudanças (git commit -m 'feat: adiciona MinhaFeature')
Push para a branch (git push origin feature/MinhaFeature)
Abra um Pull Request
Contato

Link do Repositório: github.com/seu-usuario/genio-quiz-frontend

Equipe Gênio Quiz de Front-End

© 2026 · Feito por Deivison Dos Santos, Rafael Tamy, Cauã Eduardo e Davi Ribeiro