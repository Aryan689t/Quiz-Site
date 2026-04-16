let answered=false;
const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Albert Einstein", "Charles Babbage", "Isaac Newton", "Alan Turing"],
    answer: "Charles Babbage"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    answer: "Tokyo"
  },
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["C++", "Java", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Leveler"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed the Windows OS?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    answer: "Microsoft"
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  }
];
let currentIndex=0;
let score=0;
function loadQuestion(){
    const q=questions[currentIndex];
    document.getElementById("question").innerText=q.question;
    const btns=document.querySelectorAll(".option");
    for(let i=0;i<btns.length;i++){
        btns[i].innerText=q.options[i];
        btns[i].onclick= function() {
            checkAnswer(q.options[i]);
        };
    }
}
loadQuestion()
function checkAnswer(selected){
    const correct=questions[currentIndex].answer;
 const btns = document.querySelectorAll(".option");

  // remove previous highlights
  btns.forEach(btn => btn.classList.remove("selected"));

  // find clicked button and highlight it
  btns.forEach(btn => {
    if (btn.innerText === selected) {
      btn.classList.add("selected");
    }
  });
  if(!answered){
    if (selected.trim() === correct.trim()) {
    score++;
    console.log("correct");
  } else {
    console.log("wrong");
  }
    answered=true;
}
console.log("score:", score);
}
document.getElementById("next").onclick=function(){
    currentIndex++;
    answered=false;
    document.querySelectorAll(".option").forEach(btn => {
  btn.classList.remove("selected");
});
    if(currentIndex<questions.length){
        loadQuestion();
    }
    else{
          document.body.innerHTML = `<h1>Your Score: ${score}/${questions.length}</h1>`;
    }
}


