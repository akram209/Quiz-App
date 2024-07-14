
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

        },
        {
            question: "What is the color of the blood?",
            answers: [
                { text: "Blue" },
                { text: "Green" },
                { text: "Yellow" },
                { text: "Red" }
            ],
            correctAnswer: "Red",
            indexOfCorrectAnswer:3
        },
        {
            question : "what is biggest country in the world?",
            answers : [
                { text: "Russia" },
                { text: "China" },
                { text: "India" },
                { text: "USA" }
            ],
            correctAnswer : "China",
            indexOfCorrectAnswer :1
        },
        {
            question : "what is smallest country in the world?",
            answers : [
                { text: "Russia" },
                { text: "China" },
                { text: "India" },
                { text: "Vatican City" }
            ],
            correctAnswer : "Vatican City",
            indexOfCorrectAnswer :3
        },
        {
            question : "what is largest continent in the world?",
            answers : [
                { text: "North America" },
                { text: "South America" },
                { text: "Asia" },
                { text: "Africa" }
            ],
            correctAnswer : "Asia",
            indexOfCorrectAnswer :2
        },
        {
            question :"what is the tallest building in the world?",
            answers : [
                { text: "Burj Khalifa" },
                { text: "Eiffel Tower" },
                { text: "Shanghai Tower" },
                { text: "Empire State Building" }
            ],
            correctAnswer : "Burj Khalifa",
            indexOfCorrectAnswer :0
        },
        {
            question :"what is the biggest city in the world?",
            answers : [
                { text: "New York" },
                { text: "Paris" },
                { text: "Tokyo" },
                { text: "London" }
            ],
            correctAnswer : "New York",
            indexOfCorrectAnswer :0
        }
       

    ]
}
var questionindex=0; // to keep track of the question index
var width = 0; // to keep track of the progress
var counter=0; // to keep track of the score
document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question; // set first question
document.getElementById('counter').innerHTML = (questionindex+1) + "/" + quizObject.questions.length; // set counter
// styling for the choosen option
var radios = document.getElementsByClassName('answer'); 
for (let j = 0; j < radios.length; j++) {
   
    radios[j].onclick = function() {
        resetStyle();
      document.getElementById('answer'+(j+1)).style.backgroundColor = 'lightgreen';
    }
}




function nextQuestion() {

   
    if(questionindex==quizObject.questions.length-1){
        return true;
    }
    else{ questionindex++;
        }
}

function previousQuestion() {
    questionindex--;
}
function resetAnswers() {
    var radios = document.getElementsByClassName('answer');
    for (var i = 0, length = radios.length; i < length; i++) {
        radios[i].checked = false;
        document.getElementById('answer'+1).style.backgroundColor = 'rgb(224, 223, 223)';
    }
    
}
function resetStyle()
{
    var radios = document.getElementsByClassName('answer');
    for (var j=0; j < radios.length; j++) {
        document.getElementById('answer'+(j+1)).style.backgroundColor = 'lightgray';
    }
  
}

function displayEndMessage() {
    var contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.innerHTML = '';
    var scoreMessage = document.createElement('p');
    scoreMessage.setAttribute('id', 'score');
    scoreMessage.innerHTML = 'Your score is ' + counter + ' out of ' + quizObject.questions.length;
    var reviewbtn = document.createElement('btn');
    reviewbtn.setAttribute('id', 'reviewbtn');
    reviewbtn.innerHTML = 'Review';
    
    contentDiv.appendChild(scoreMessage);
    contentDiv.appendChild(reviewbtn);
}
function checkAnswer() {
    var radios = document.getElementsByClassName('answer');
    for (var i = 0;  i <radios.length; i++) {
        if (radios[i].checked) {
            
            if (i=== quizObject.questions[questionindex].indexOfCorrectAnswer) {
                counter++;
                
            }
        }
        else {
            var wrongAnswers =[];
            wrongAnswers.push(quizObject.questions[questionindex].answers[i].text);
        }
    }
   resetAnswers();
   resetStyle();
   if (questionindex == quizObject.questions.length-1) {
       displayEndMessage();
    }
    
}




document.getElementById('next').onclick = function() {
    checkAnswer();
    nextQuestion();
    document.getElementById('question-content').innerHTML = quizObject.questions[questionindex].question;
    swapAnswer(questionindex);
    width=0;

}

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


