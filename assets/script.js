const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above.",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const choicesLabels = document.querySelectorAll("[id^=choice]");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    currentQuestion.choices.forEach((choice, index) => {
        choicesLabels[index].textContent = choice;
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="answer"]:checked');
    if (!selectedChoice) return;

    const selectedAnswerIndex = parseInt(selectedChoice.value, 10);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
}

submitButton.addEventListener("click", checkAnswer);

showQuestion();
