let currentHtmlQuest = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = htmlQuestions.length;
    showHtmlQuestion();
}


function showHtmlQuestion() {
    let question = htmlQuestions[currentHtmlQuest];
    if (currentHtmlQuest == htmlQuestions.length) {
        document.getElementById('endCard').innerHTML = '';
        document.getElementById('endCard').innerHTML = finishQuiz();
    } else {
        document.getElementById('questionTextHTML').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    };
}


function answer(selection) {
    let question = htmlQuestions[currentHtmlQuest];
    let idRightAnswer = `answer_${question['right_answer']}`;
    let selectQuest = selection.slice(-1);
    
    if(question['right_answer'] == selectQuest) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
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
                <div class="fw-bold text-success">YOUR SCORE</div>
                <span class="fw-bold ms-4">10/${htmlQuestions.length}</span>
            </div>
            <button class="btn btn-primary mb-3" >SHARE</button>
            <button class="replay-button text-primary">REPLAY</button>
        </div>
    `;

}