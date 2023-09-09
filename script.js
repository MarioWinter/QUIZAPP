let currentHtmlQuest = 0;
let scores = 0;
let audioWin = new Audio('audio/win.mp3');
let audioLose = new Audio('audio/lose.mp3');
let audioScore = new Audio('audio/score.mp3');
let audioFail = new Audio('audio/fail.mp3');


function init() {
    showHtmlQuestion();
    document.getElementById('allQuestions').innerHTML = htmlQuestions.length;
}


function showHtmlQuestion() {
    if (QuizIsOver()) {
        showEndScreen();
    } else {
        showQuestScreen();
    };
}


function QuizIsOver() {
    return currentHtmlQuest == htmlQuestions.length;
}


function showEndScreen() {
    document.getElementById('cardContent').style.display = 'none';
    document.getElementById('endCard').innerHTML = '';
    document.getElementById('endCard').innerHTML = finishQuiz();
    addRightTextColor();
}


function addRightTextColor() {
    if (scores <= 4) {
        document.getElementById('score').classList.add('text-danger');
        audioFail.play();
    } else if (scores < 9) {
        document.getElementById('score').classList.add('text-warning');
    } else if (scores >= 9) {
        document.getElementById('score').classList.add('text-success');
        document.getElementById('tropyImg').style.display = "block";
        document.getElementById('endCard').style.display = "flex";
        audioWin.play();
    }
}


function showQuestScreen() {
    let question = htmlQuestions[currentHtmlQuest];
    document.getElementById('cardContent').style.display = 'block';
    document.getElementById('questionTextHTML').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = htmlQuestions[currentHtmlQuest];
    let idRightAnswer = `answer_${question['right_answer']}`;
    let selectQuest = selection.slice(-1);
    addRightQuizColor(idRightAnswer, selectQuest, question, selection);
    document.getElementById('nextButton').disabled = false;
}


function addRightQuizColor(idRightAnswer, selectQuest, question, selection) {
    if(question['right_answer'] == selectQuest) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        scores++;
        audioScore.load();
        audioScore.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idRightAnswer).parentNode.classList.add('bg-success');
        audioLose.load();
        audioLose.play();
    }
}


function nextQuest() {
    currentHtmlQuest++;
    showHtmlQuestion();
    document.getElementById('nextButton').disabled = true;
    nextPage();
    resetQuests();
}


function nextPage() {
    let currentQuestPage = currentHtmlQuest;
    if (currentHtmlQuest == htmlQuestions.length) {
    } else {
        currentQuestPage = currentQuestPage + 1
        document.getElementById('questPage').innerHTML = currentQuestPage;
    }
}


function resetQuests() {
    for (let i = 1; i < 5; i++) {
        let answer = 'answer_' + i;
        document.getElementById(answer).parentNode.classList.remove('bg-success');
        document.getElementById(answer).parentNode.classList.remove('bg-danger'); 
    }
}


function finishQuiz() {
    return `
        <div class="finish-card-container">
            <img class="brain-result" src="./img/brain result.png" alt="">
            <div class="mt-3 fw-bold">COMPLETE</div>
            <div class="mb-4 fw-bold" >HTML QUIZ</div>
            <div class="finish-score mb-4">
                <div id="score" class="fw-bold">YOUR SCORE</div>
                <span class="fw-bold ms-4">${scores}/${htmlQuestions.length}</span>
            </div>
            <button class="btn btn-primary mb-3" >SHARE</button>
            <button class="replay-button text-primary" onclick="replayHTMLQuiz()">REPLAY</button>
        </div>
        <img id="tropyImg" class="tropy-img" src="./img/tropy.png" alt="tropy image" style="display: none;">
    `;
}


function replayHTMLQuiz() {
    currentHtmlQuest = 0;
    scores = 0;
    document.getElementById('endCard').innerHTML = '';
    init();
    document.getElementById('questPage').innerHTML = 1;
    resetProgressBar();
}


function loadProgressBar() {
    let progress = Math.round(currentHtmlQuest / htmlQuestions.length * 100);
    document.getElementById('pogressBar').innerHTML = `${progress}%`;
    document.getElementById('pogressBar').style.width = `${progress}%`;
}


function resetProgressBar() {
    document.getElementById('pogressBar').innerHTML = `0%`;
    document.getElementById('pogressBar').style.width = `0%`;

}