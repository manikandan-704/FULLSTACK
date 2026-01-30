const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resulScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionSection = document.getElementById("dispaly-qus");
const anserOptions = document.getElementById("ans-container");

const quizQuestions = [
    {
        question: "What is the Capital city of TamilNady?",
        options:[{text:"Madurai", correct:false},
            {text:"Madurai", correct:false},
            {text:"Chennai", correct:true},
            {text:"Trichy", correct:false}]
    },

    {
        question: "What is the Capital city of TamilNady?",
        options:[{text:"Madurai", correct:false},
            {text:"Madurai", correct:false},
            {text:"Chennai", correct:true},
            {text:"Trichy", correct:false}]
    },
    {
        question: "What is the Capital city of TamilNady?",
        options:[{text:"Madurai", correct:false},
            {text:"Madurai", correct:false},
            {text:"Chennai", correct:true},
            {text:"Trichy", correct:false}]
    },
    {
        question: "What is the Capital city of TamilNady?",
        options:[{text:"Madurai", correct:false},
            {text:"Madurai", correct:false},
            {text:"Chennai", correct:true},
            {text:"Trichy", correct:false}]
    },
    {
        question: "What is the Capital city of TamilNady?",
        options:[{text:"Madurai", correct:false},
            {text:"Madurai", correct:false},
            {text:"Chennai", correct:true},
            {text:"Trichy", correct:false}]
    }
];

const questionIndex=0;
const question