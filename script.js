let score = 0;
let time = 90; // 60 segundos
let timer;
let currentQuestion;

const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submitAnswer');
const startButton = document.getElementById('startButton');

function startGame() {
    score = 0;
    time = 90; // Iniciar com 60 segundos
    scoreElement.textContent = `Acertos: ${score}`;
    timeElement.textContent = time;
    startButton.disabled = true;
    answerInput.value = '';

    startTimer();
    nextQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        time--;
        timeElement.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function nextQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    // Escolher aleatoriamente entre adição e subtração
    const operations = ['+', '-'];
    const currentOperation = operations[Math.floor(Math.random() * operations.length)];

    // Gerar pergunta com base na operação escolhida
    if (currentOperation === '+') {
        currentQuestion = num1 + num2;
        questionElement.textContent = `Quanto é ${num1} + ${num2}?`;
    } else {
        currentQuestion = num1 - num2;
        questionElement.textContent = `Quanto é ${num1} - ${num2}?`;
    }
}

function submitAnswer() {
    const answer = parseInt(answerInput.value, 10);

    // Comparar resposta correta
    if (answer === currentQuestion) {
        score++;
        scoreElement.textContent = `Acertos: ${score}`;
    }

    answerInput.value = '';
    nextQuestion();
}

function endGame() {
    alert(`Tempo esgotado! Você fez ${score} pontos.`);
    startButton.disabled = false;
}

submitButton.addEventListener('click', submitAnswer);
startButton.addEventListener('click', startGame);
