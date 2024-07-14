
var quizObject = {
    questions: [
        {
            question: "What is the color of the sky?",
            answers: [
                { text: "Blue" },
                { text: "Green" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Blue",
            indexOfCorrectAnswer:0
        },
        {
            question: "What is the color of the grass?",
            answers: [
                { text: "Green" },
                { text: "Blue" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Green",
            indexOfCorrectAnswer:0
        },
        {
            question: "What is the color of the sun?",
            answers: [
                { text: "Blue" },
                { text: "Green" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Yellow",
            indexOfCorrectAnswer:2
        },
        {
            question: "What is the color of the water?",
            answers: [
                { text: "Blue" },
                { text: "Green" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Blue",
            indexOfCorrectAnswer:0

        }
    ]
}
var questionindex=0;
var width = 0;
var counter=0;
document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
document.getElementById('counter').innerHTML = (questionindex+1) + "/" + quizObject.questions.length;


function nextQuestion() {

    questionindex++;
}

function previousQuestion() {
    questionindex--;
}
function resetAnswers() {
    var radios = document.getElementsByClassName('answer');
    for (var i = 0, length = radios.length; i < length; i++) {
        radios[i].checked = false;
    }
    
}
function checkAnswer() {
    var radios = document.getElementsByClassName('answer');
    for (var i = 0;  i <radios.length; i++) {
        if (radios[i].checked) {
            if (i=== quizObject.questions[questionindex].indexOfCorrectAnswer) {
                counter++;
                
            }
        }
        // else {
        //     var wrongAnswers =[];
        //     wrongAnswers.push(quizObject.questions[questionindex].answers[i].text);
        // }
    }
   resetAnswers();
   if (questionindex == quizObject.questions.length-1) {
  alert("Your score is " + counter + " out of " + (questionindex+1));
   }
    
}

document.getElementById('next').onclick = function() {
    checkAnswer();
    nextQuestion();
    document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
    swapAnswer(questionindex);
    width=0;

}



// var firstQuestion = quizObject.questions[0].question;

// var firstQuestionAnswer = quizObject.questions[0].answers[0].text;
function swapAnswer(index) {
 
    for (var i=0; i<4; i++){
        document.getElementById('answer'+(i+1)).innerHTML = quizObject.questions[index].answers[i].text;
    }
}

for (var i=0; i<4; i++){
    document.getElementById('answer'+(i+1)).innerHTML = quizObject.questions[questionindex].answers[i].text;
}
function startLoading() {
    let loadingBar = document.getElementById('bar');

     width = 0;

 
    let interval = setInterval(function() {

        if (width >= 100) {
            clearInterval(interval);
            checkAnswer();
            questionindex++;
            // if you want to show the previous button
            // if(questionindex>0){
            //     document.getElementById('previous').style.display = "inline";
            // }
            if(!questionindex<quizObject.questions.length){
                document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
                swapAnswer(questionindex);
                startLoading();
            }
            if (questionindex == quizObject.questions.length) {
                
                alert("Your score is " + counter + " out of " + (questionindex));
            }
           
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
        document.getElementById('counter').innerHTML = (questionindex+1) + "/" + quizObject.questions.length;

    }, 130); // Adjust the interval duration as needed
}

startLoading();



/* this doesn't work as expected because while loop is working synchronously  */
// function startLoading(){
//     var loadingBar = document.getElementById('bar');
//     var questionindex=0;
//     document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
//     var width = 0;
//     while (width < 100) {
//         width++;
//         loadingBar.style.width = width + '%';
//     }
//     if(width==100){
//         questionindex++;
//         document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
//         startLoading();
//     }

// }


// document.getElementById('question-content').innerHTML = quizObject.questions[0].question;