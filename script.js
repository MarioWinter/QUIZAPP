let currentHtmlQuest = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = htmlQuestions.length;
    showHtmlQuestion();
}


function showHtmlQuestion() {
    let question = htmlQuestions[currentHtmlQuest];
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
    currentQuestPage = currentQuestPage + 1
    document.getElementById('questPage').innerHTML = currentQuestPage;
}

function resetQuests() {
    for (let i = 1; i < 5; i++) {
        let answer = 'answer_' + i;
        document.getElementById(answer).parentNode.classList.remove('bg-success');
        document.getElementById(answer).parentNode.classList.remove('bg-danger');
        
    }

}