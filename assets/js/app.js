
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
            correctAnswer: "Blue"
        },
        {
            question: "What is the color of the grass?",
            answers: [
                { text: "Green" },
                { text: "Blue" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Green"
        },
        {
            question: "What is the color of the sun?",
            answers: [
                { text: "Blue" },
                { text: "Green" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Yellow"
        },
        {
            question: "What is the color of the water?",
            answers: [
                { text: "Blue" },
                { text: "Green" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Blue"
        }
    ]
}
// function swapQuestion(questionindex) {
//   for (var i = 0; i <quizObject.questions.length ;i++){
//     if(document.getElementById('question-content')==quizObject.questions[i].question){
//         questionindex=i;
//     }
//     return questionindex+1;
//   }



// var firstQuestion = quizObject.questions[0].question;

// var firstQuestionAnswer = quizObject.questions[0].answers[0].text;
function swapanswer(index) {
 
    for (var i=0; i<4; i++){
        document.getElementById('answer'+(i+1)).innerHTML = quizObject.questions[index].answers[i].text;
    }
}
var questionindex=0;
document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
for (var i=0; i<4; i++){
    document.getElementById('answer'+(i+1)).innerHTML = quizObject.questions[questionindex].answers[i].text;
}
function startLoading() {
    let loadingBar = document.getElementById('bar');

    var width = 0;
    let interval = setInterval(function() {

        if (width >= 100) {
            clearInterval(interval);
            questionindex++;
            if(questionindex>0){
                document.getElementById('previous').style.display = "inline";
            }
            if(!questionindex<=quizObject.questions.length){
                document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
                swapanswer(questionindex);
                startLoading();
            }
           
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 130); // Adjust the interval duration as needed
}




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
startLoading();


// document.getElementById('question-content').innerHTML = quizObject.questions[0].question;