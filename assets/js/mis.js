 // get the wrong answers from local storage
document.addEventListener('DOMContentLoaded', function() {
    var wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers')) || [];

    var container = document.getElementById('wrong-answers-container');

    wrongAnswers.forEach(function(wrongAnswer) {
        var div = document.createElement('div');
        div.className = 'wrong-answer';

        var questionP = document.createElement('p');
        questionP.textContent = 'Question: ' + wrongAnswer.question;
        div.appendChild(questionP);

        var correctAnswerP = document.createElement('p');
        correctAnswerP.textContent = 'Correct Answer: ' + wrongAnswer.correctAnswer;
        div.appendChild(correctAnswerP);

        var yourAnswerP = document.createElement('p');
        yourAnswerP.textContent = 'Your Answer: ' + wrongAnswer.answer;
        div.appendChild(yourAnswerP);

        container.appendChild(div);
    });
});