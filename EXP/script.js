const correctAnswers = {
    1: 'Hedwig',
    2: 'Sirius Black',
    3: 'Gryffindor',
    4: 'Expelliarmus',
    5: 'The Burrow',
    6: 'Felix Felicis',
    7: 'Nearly Headless Nick',
    8: 'A dragon',
    9: 'Thestrals',
    10: '14'
};

let selectedAnswers = {}; // To store selected answers for each question

// Function to handle answer selection
function selectAnswer(questionNumber, answer) {
    // Store the selected answer for the question
    selectedAnswers[questionNumber] = answer;

    // Get all buttons for the current question
    const buttons = document.querySelectorAll(`[data-question="${questionNumber}"] .options button`);

    // Remove 'selected' class from all buttons of this question
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Find and add 'selected' class to the clicked button
    buttons.forEach(button => {
        if (button.textContent === answer) {
            button.classList.add('selected');
        }
    });
}

// Function to submit quiz and show score
function submitQuiz() {
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Calculate the score based on correct answers
    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        if (selectedAnswers[question] === correctAnswer) {
            score++;
        }
    }

    // Show score and the review
    alert(`Your score is: ${score}/${totalQuestions}`);
    console.log("Selected answers:", selectedAnswers);  // For debugging or review purposes
}
