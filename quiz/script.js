
const questions = [
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: [1],
        multiple: false
    },
    {
        question: "What is the output of typeof null?",
        options: ["null", "undefined", "object", "number"],
        answer: [2],
        multiple: false
    },
    {
        question: "Which array method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: [0],
        multiple: false
    },
    {
        question: "What does === compare in JavaScript?",
        options: [
            "Only values",
            "Only data types",
            "Values and data types",
            "Variable names"
        ],
        answer: [2],
        multiple: false
    },
    {
        question: "What will console.log(2 + '2') output?",
        options: ["4", "22", "NaN", "undefined"],
        answer: [1],
        multiple: false
    },
    {
        question: "Which of these are JavaScript primitive data types?",
        options: ["String", "Boolean", "Array", "Number"],
        answer: [0, 1, 3],
        multiple: true
    },
    {
        question: "JavaScript arrays can contain values of different data types.",
        options: ["True", "False"],
        answer: [0],
        multiple: false
    },
    {
        question: "The forEach() method creates and returns a new array containing callback results.",
        options: ["True", "False"],
        answer: [1],
        multiple: false
    }
];

// Selecting HTML elements
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const feedback = document.getElementById("feedback");

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const resultContainer = document.getElementById("result-container");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

// Quiz variables
let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);

// Display question
function showQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsContainer.replaceChildren();

    feedback.textContent = "";

    current.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        const selected = userAnswers[currentQuestion];

        if (selected !== null) {

            const isSelected = selected.includes(index);
            const isCorrect = current.answer.includes(index);

            if (isSelected) {
                button.classList.add("selected");
            }

            if (isCorrect) {
                button.classList.add("correct");
            }

            if (isSelected && !isCorrect) {
                button.classList.add("wrong");
            }

            button.disabled = true;
        }

        button.addEventListener("click", function () {
            selectOption(index);
        });

        optionsContainer.appendChild(button);

    });

    if (userAnswers[currentQuestion] !== null) {
        feedback.textContent = "Answer submitted. Review the highlighted options.";
    }

    previousBtn.disabled = currentQuestion === 0;

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next";

    updateScore();
}

// Select option
function selectOption(index) {

    if (userAnswers[currentQuestion] !== null) {
        return;
    }

    const current = questions[currentQuestion];

    if (current.multiple) {

        if (userAnswers[currentQuestion] === null) {
            userAnswers[currentQuestion] = [];
        }

        userAnswers[currentQuestion].push(index);

        // For multiple answers, use the Next button to submit.
        optionsContainer.children[index].classList.add("selected");

    } else {

        userAnswers[currentQuestion] = [index];

        showQuestion();
    }

}

// Submit multiple choice answer
function submitMultiple() {

    if (userAnswers[currentQuestion] === null) {
        feedback.textContent = "Please select at least one option.";
        return false;
    }

    showQuestion();

    return true;
}

// Calculate score
function calculateScore() {

    let score = 0;

    questions.forEach((question, index) => {

        const selected = userAnswers[index];

        if (selected === null) {
            return;
        }

        const correct = question.answer;

        const isCorrect =
            selected.length === correct.length &&
            selected.every(value => correct.includes(value));

        if (isCorrect) {
            score++;
        }

    });

    return score;
}

// Update score
function updateScore() {

    scoreElement.textContent =
        `Score: ${calculateScore()}`;
}

// Next button
nextBtn.addEventListener("click", function () {

    const current = questions[currentQuestion];

    if (userAnswers[currentQuestion] === null) {
        feedback.textContent = "Please select an answer first.";
        return;
    }

    if (current.multiple && !submitMultiple()) {
        return;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        showQuestion();

    } else {

        showResult();

    }

});

// Previous button
previousBtn.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;
        showQuestion();

    }

});

// Result screen
function showResult() {

    document.querySelector("main").style.display = "none";
    document.querySelector(".quiz-info").style.display = "none";
    document.querySelector(".progress-container").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    resultContainer.style.display = "block";

    const score = calculateScore();

    finalScore.textContent =
        `${score} / ${questions.length}`;

    resultMessage.textContent =
        score === questions.length
            ? "Excellent! You got all answers correct!"
            : "Good effort! Keep practicing JavaScript.";

}

// Restart quiz
restartBtn.addEventListener("click", function () {

    currentQuestion = 0;

    userAnswers = Array(questions.length).fill(null);

    document.querySelector("main").style.display = "block";
    document.querySelector(".quiz-info").style.display = "flex";
    document.querySelector(".progress-container").style.display = "block";
    document.querySelector(".buttons").style.display = "flex";

    resultContainer.style.display = "none";

    showQuestion();

});

// Start quiz
showQuestion();
