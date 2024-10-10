const quizData = [
    {
        question: "What is the real name of the character 'Rancho'?",
        options: ["Raj", "Ranjan", "Ramchandra", "Phunsukh"],
        answer: 3
    },
    {
        question: "Which college do the main characters attend?",
        options: ["IIT Delhi", "Imperial College", "Pursuit of Excellence", "MIT"],
        answer: 1
    },
    {
        question: "Who plays the role of Farhan in the movie?",
        options: ["R. Madhavan", "Sharman Joshi", "Aamir Khan", "Omi Vaidya"],
        answer: 0
    },
    {
        question: "What is the main passion of Farhan?",
        options: ["Engineering", "Photography", "Music", "Cricket"],
        answer: 1
    },
    {
        question: "What profession does Pia aspire to have?",
        options: ["Doctor", "Engineer", "Lawyer", "Artist"],
        answer: 0
    },
    {
        question: "What is the name of the strict director of the college?",
        options: ["Viru Sahastrabudhhe", "Chatur Ramalingam", "Fakira", "Virus"],
        answer: 0
    },
    {
        question: " Virus took a power nap while listening to Opera. How long did the power nap last?",
        options: ["7 Minutes", "8 Minutes", "5.5 Minutes", "7.5 Minutes"],
        answer: 3
    },
    {
        question: "What is the tagline of the movie?",
        options: ["All is well", "Keep moving forward", "Dream big", "Never give up"],
        answer: 0
    },
    {
        question: "Virus asks a hungover Raju a question in the class. What was it?",
        options: ["How does an induction motor start?", "How does an engine start?", "Are you drunk?", "Am I a fool?"],
        answer: 0
    },
    {
        question: "What is the ultimate message of the movie?",
        options: ["Focus on grades", "Follow your passion", "Obey authority", "Avoid risks"],
        answer: 1
    }
];

let userName = "";
let score = 0;

function startQuiz() {
    userName = prompt("Please enter your name:");
    if (userName === null || userName.trim() === "") {
        alert("Name is required to start the quiz.");
        return;
    }
    document.getElementById('main-container').innerHTML = `
        <h2>Welcome, ${userName}!</h2>
        <div class="quiz" id="quiz-container">
            ${generateQuiz()}
            <button class="submit-button" onclick="submitQuiz()">Submit Quiz</button>
        </div>
    `;
    document.getElementById('quiz-container').style.display = 'block';
}

function generateQuiz() {
    let quizHTML = '';
    quizData.forEach((item, index) => {
        quizHTML += `
            <div class="question">
                <h3>Q${index + 1}. ${item.question}</h3>
                <div class="options">
                    ${item.options.map((option, i) => `
                        <label>
                            <input type="radio" name="question${index}" value="${i}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    return quizHTML;
}

function submitQuiz() {
    score = 0;
    for (let i = 0; i < quizData.length; i++) {
        const selected = document.querySelector(`input[name="question${i}"]:checked`);
        if (selected && parseInt(selected.value) === quizData[i].answer) {
            score++;
        }
    }

    const percentage = ((score / quizData.length) * 100).toFixed(2);
    let resultMessage = `${userName}, you scored ${score} out of ${quizData.length}.\nYour Percentage: ${percentage}%`;

    const continueQuiz = confirm(`${resultMessage}\n\nDo you want to continue?`);
    if (continueQuiz) {
        window.location.reload();
    } else {
        document.getElementById('main-container').innerHTML = `
            <h2>Thank You, ${userName}!</h2>
            <div class="result">
                You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.<br>
                Your Percentage: <strong>${percentage}%</strong>
            </div>
            <button class="continue-button" onclick="window.location.reload()">Try Again</button>
            <button class="exit-button" onclick="window.close()">Exit</button>
        `;
    }
}