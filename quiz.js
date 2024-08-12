const questions=[
    {
        question:"what did sai drink?",
        answers:[
            { text:"coffee",correct:false},
            { text:"Tea",correct:false},
            { text:"Milk",correct:false},
            { text:"Juice",correct:true},
        ]
    },
    {
        question:"which color is sai's fav color?",
        answers:[
            { text:"black",correct:false},
            { text:"white",correct:true},
            { text:"pink",correct:false},
            { text:"red",correct:false},
        ]
    },
    {
        question:"how she spend's her free time ?",
        answers:[
            { text:"tv",correct:true},
            { text:"mobile",correct:false},

            { text:"games",correct:false},
            { text:"music",correct:false},
        ]
    },
    {
        question:"was she good or bad ?",
        answers:[
            { text:"good",correct:false},
            
            { text:"bad",correct:false},
            { text:"worse",correct:true},

            { text:"ok",correct:false},
        ]
    },
    {
        question:"What is her fav song?",
        answers:[
            { text:"bala thripuramani from brahmosthavam",correct:false},
            { text:"cheliya from evadu",correct:false},
            { text:"nuvvu nuvvu from khadgam",correct:false},
            { text:"cheliya from manmadhudu",correct:true},
        ]
    },
    {
        question:"who's her fav hero ?",
        answers:[
            { text:"Prabhas",correct:false},
            { text:"Nani",correct:true},
            { text:"Mahesh",correct:false},
            { text:"Allu Arjun",correct:false},
        ]
    },
    {
        question:"who is her fav actresses?",
        answers:[
            { text:"Samantha",correct:false},
            { text:"Kajal",correct:true},
            { text:"Mrunal",correct:false},
            { text:"Trisha",correct:false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) 
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}





function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});
startQuiz();
