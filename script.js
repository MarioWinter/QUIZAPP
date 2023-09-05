let currentHtmlQuest = 0;
let question = htmlQuestions[currentHtmlQuest];
let idRightAnswer = `answer_${question['right_answer']}`;

function init() {
    document.getElementById('allQuestions').innerHTML = htmlQuestions.length;
    showHtmlQuestion();
}


function showHtmlQuestion() {
    document.getElementById('questionTextHTML').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let selectQuest = selection.slice(-1);
    
    if(question['right_answer'] == selectQuest) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        console.log(idRightAnswer);
        document.getElementById(idRightAnswer).parentNode.classList.add('bg-success');
    }
}