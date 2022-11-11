// Variable
let currentQuestion = 0;
let right_answer_counter = 0;
let false_answer_counter = 0;
let audio_success = new Audio('audio/success.mp3');
let audio_fail = new Audio('audio/fail.mp3');
let audio_end = new Audio('audio/bravo.mp3')


// Array
let questions = [
    {
        "question": "Which country has the largest population in the world?",
        "answer_1": "USA",
        "answer_2": "Brazil",
        "answer_3": "China",
        "answer_4": "India",
        "right_answer": 3
    },
    {
        "question": "Which city is the Capital of Romania?",
        "answer_1": "Budapest",
        "answer_2": "Bucarest",
        "answer_3": "Bratislava",
        "answer_4": "Cluj-Napoca",
        "right_answer": 2
    },
    {
        "question": "Which are the colors of the German flag?",
        "answer_1": "Black, Red, Yellow",
        "answer_2": "Black, Red, Mandarin",
        "answer_3": "Black, Red, Orange",
        "answer_4": "Black, Red, Gold",
        "right_answer": 4
    },
    {
        "question": "The second smallest country in the world is?",
        "answer_1": "Vatican",
        "answer_2": "San Marino",
        "answer_3": "Monaco",
        "answer_4": "Nauru",
        "right_answer": 3
    },
    {
        "question": "Which is the city with the highest population in the world?",
        "answer_1": "Tokyo",
        "answer_2": "Delhi",
        "answer_3": "Beijing",
        "answer_4": "New York",
        "right_answer": 1
    },
    {
        "question": "Which country has the longest coastline in the world ?",
        "answer_1": "Norway",
        "answer_2": "Australia",
        "answer_3": "USA",
        "answer_4": "Canada",
        "right_answer": 4
    },
    {
        "question": "People of which country drink the most coffe per person?",
        "answer_1": "Italy",
        "answer_2": "Finland",
        "answer_3": "USA",
        "answer_4": "Brazil",
        "right_answer": 2
    },
    {
        "question": "Which is the most common Surname in Germany?",
        "answer_1": "Meyer",
        "answer_2": "Schmidth",
        "answer_3": "Müller",
        "answer_4": "Schneider",
        "right_answer": 3
    },
    {
        "question": "Which is the longest river in the world?",
        "answer_1": "The Nile",
        "answer_2": "The Mississippi",
        "answer_3": "The Amazon River",
        "answer_4": "The Yangtze",
        "right_answer": 1
    },
    {
        "question": "Which is the happiest country in the world ?",
        "answer_1": "Germany",
        "answer_2": "Australia",
        "answer_3": "Denmark",
        "answer_4": "Finland",
        "right_answer": 4
    },
];


//Initialize page
function initPage() {
    quiz__lenght();
    showQuestion();
    showAnswear();
}


// Show questions & answers 
function quiz__lenght() {
    let length = document.getElementById('quiz__lenght');
    length.innerHTML = questions.length;
}


function showQuestion() {
    let question = questions[currentQuestion];
    let showQuestion = document.getElementById('question_ID');
    showQuestion.innerHTML = question['question'];
}


function showAnswear() {
    let question = questions[currentQuestion];
    for (i = 0; i < 4; i++) {
        let answer = document.getElementById('answer_' + (i + 1) + '--id');
        answer.innerHTML = question['answer_' + (i + 1)];
    }
}


//Select the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion <= questions.length - 1) {
        percentCalculator();
        //Increase Current Question Counter 
        let quizQuestion__counter = document.getElementById('quizQuestion__counter');
        quizQuestion__counter.innerHTML = currentQuestion + 1;
        // Reset & Show new question
        showQuestion();
        showAnswear();
    } else {
        //Show the result at the end of the quiz
        percentCalculator();
        showResult();
        playApplause();
    }
    resetButton();
    closeQuiz();
}


//Feed-back for the answer
function answer(selector) {
    let question = questions[currentQuestion];
    let right_answer = question['right_answer'];
    let selectorNumber = selector.slice(-1);
    let idOfRightAnswer = 'answer_' + right_answer;
    // If the answer is correct
    if (selectorNumber == right_answer) {
        audio_success.play();
        right_answer_counter++;
        document.getElementById(selector + '--id').parentNode.classList.add('bg-success');
    } else {
        //If the answer is wrong
        audio_fail.play();
        false_answer_counter++;
        document.getElementById(selector + '--id').parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer + '--id').parentNode.classList.add('bg-success');
    }
    document.getElementById('nextQuestionId').disabled = false;
}


//Re-enable the "Next Question" Button
function resetButton() {
    document.getElementById('nextQuestionId').disabled = true;
    for (let i = 1; i < 5; i++) {
        document.getElementById('answer_' + i + '--id').parentNode.classList.remove('bg-success');
        document.getElementById('answer_' + i + '--id').parentNode.classList.remove('bg-danger');
    }
}


//It show the result of the Quiz
function showResult() {
    let resultText = document.getElementById('result_id');
    resultText.innerHTML = templateResult();
    document.getElementById('quiz_img').src = "/img/cup-1615074_640.png";
    document.getElementById('quiz_body').style = 'display:none';
    document.getElementById('result_id').style = '';
}


//Template of the result 
function templateResult() {
    return `<div class="result">
                <h5> Congratulation!</h5> 
                <p> You have <b>${right_answer_counter}</b> right Answers out of <b>10</b> Questions.</p>
            </div>
            <div>
                <button onclick="restartGame()" class=" btn btn-primary" id="restartGame">Restart Game</button>
            </div>`;
}


//It changes the text from "Next Question" into "Finish"
function closeQuiz() {
    if (currentQuestion == 9) {
        document.getElementById('nextQuestionId').innerHTML = `Finish`;
    } else{
        document.getElementById('nextQuestionId').innerHTML = `Next Question!`;
    }
}


//Calculate the percents
function percentCalculator() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}


//Reset the Quizz
function restartGame() {
    document.getElementById('quiz_img').src = "/img/education-6305113_640.jpg";
    document.getElementById('quiz_body').style = '';
    document.getElementById('result_id').style = 'display:none';

    resetCounters()
    initPage();
    percentCalculator();
}


//Reset the Counters
function resetCounters() {
    right_answer_counter = 0;
    currentQuestion = 0;
    let quizQuestion__counter = document.getElementById('quizQuestion__counter');
    quizQuestion__counter.innerHTML = currentQuestion + 1;
}


//Play end applause
function playApplause(){
    if(currentQuestion == 10){
        audio_end.play();
    }
}