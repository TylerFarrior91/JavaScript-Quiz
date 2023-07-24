var intro = document.querySelector(".intro")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var end = document.querySelector(".end")
end.style.display = "none"
var startBtn = document.querySelector(".startBtn")
var question = document.querySelector(".question")
var choices = document.querySelector(".choices")
var outcome = document.querySelector(".outcome")
var intialsInput = document.querySelector(".intialsInput")
var submitBtn = document.querySelector(".submitBtn")
var timer = document.querySelector(".timer")

var questionNumber = 0;
var score = 0;
var timeLeft = 60;

const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "C. alerts",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["A. commas", "B. curly brackets", "C. quotes", "D parentheses"],
        answer: "C. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "A. JavaScript",
            "B. terminal/bash",
            "C. for loops",
            "D. console.log",
        ],
        answer: "D. console.log",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "A. numbers and strings",
            "B. other arrays",
            "C. booleans",
            "D. all of the above",
        ],
        answer: "D. all of the above.",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["A. break", "B. stop", "C. halt", "D. exit"],
        answer: "A. break",
    }
];


startBtn.addEventListener("click", function() {
    intro.style.display = "none"
    quiz.style.display = "block"
    setInterval(function() {
        timeLeft--
        timer.innerHTML = timeLeft
    }, 1000)
    start(questionNumber)
})

function start(questionNumber) {
    question.innerHTML = questions[questionNumber].questionText
    choices.innerHTML = ""
    var choicesSet = questions[questionNumber].options
    choicesSet.forEach(function(choice) {
        var li = document.createElement("li")
        li.innerHTML = choice
        choices.append(li)
        li.addEventListener("click", function(event) {
            var clicked = event.target.innerHTML;
            var correct = questions[questionNumber].answer
            if(clicked == correct) {
                score = score + 20;
            } else {
                timeLeft = timeLeft - 10
            }
            questionNumber++
            if(questionNumber < questions.length) {
                start(questionNumber)
            } else {
                questionNumber = 0
                endQuiz()
            }
        })
    })
}

function endQuiz() {
    quiz.style.display = "none"
    end.style.display = "block"
}




