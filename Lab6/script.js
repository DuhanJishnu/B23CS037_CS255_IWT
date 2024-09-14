
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.querySelectorAll('.options button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'selected' class from all buttons
        document.querySelectorAll('.options button').forEach(btn => btn.classList.remove('selected'));
        
        // Add the 'selected' class to the clicked button
        this.classList.add('selected');
    });
});

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

let selectedAnswers = {};

function selectAnswer(questionNumber, answer) {
    selectedAnswers[questionNumber] = answer;
}

function submitQuiz() {
    let score = 0;
    for (const [question, answer] of Object.entries(correctAnswers)) {
        if (selectedAnswers[question] === answer) {
            score++;
        }
    }
    alert('Your score is: ' + score + '/' + Object.keys(correctAnswers).length);
}
