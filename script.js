const quize = [
  {
    quizeNo: 1,
    question:
      "Which software development methodology emphasizes iterative and incremental development?",
    answers: ["Waterfall", "Agile", "Scrum", "Lean"],
    rightAnswer: 1,
  },
  {
    quizeNo: 2,
    question:
      "In object-oriented programming, what is the term for creating a new object based on an existing class?",
    answers: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    rightAnswer: 0,
  },
  {
    quizeNo: 3,
    question:
      "Which version control system is designed to handle everything from small to very large projects with speed and efficiency?",
    answers: ["Git", "Subversion (SVN)", "Mercurial", "Perforce"],
    rightAnswer: 0,
  },
  {
    quizeNo: 4,
    question:
      "Which type of testing focuses on evaluating the system's compliance with business requirements?",
    answers: [
      "Unit testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
    rightAnswer: 3,
  },
  {
    quizeNo: 5,
    question:
      "Which software architecture style involves breaking down an application into smaller, loosely coupled services?",
    answers: [
      "Monolithic architecture",
      "Microservices architecture",
      "Client-server architecture",
      "Peer-to-peer architecture",
    ],
    rightAnswer: 1,
  },
];

const startBtn = document.querySelector(".js-start-btn");
let quizIndex = 0;
let quizMarks = 0;



startBtn.addEventListener("click", () => {
  document.querySelector(".js-quize-screen").classList.remove("screen-off");
  document.querySelector(".front-screen").classList.add("screen-off");
  document.querySelector("body").classList.add("quize-screen-body");
});





renderQuize(quizIndex);


document.querySelector('.js-next-btn').addEventListener('click',()=>{
  if(quizIndex === 4){
    document.querySelector('.js-next-btn').innerHTML = 'Finished'
    renderQuize(5)
  }
  renderQuize(quizIndex);
})


function renderQuize(index) {

  if(index === 5){
    document.querySelector(".js-main").innerHTML = `${calculateMarks()}%`
  }
  else{
    const fullQuiz = quize[index];
    const { quizeNo } = fullQuiz;
    const { question } = fullQuiz;
    const { rightAnswer } = fullQuiz;
    const { answers } = fullQuiz;
  
    const quizHtml = `
    <div class="num-of-quest">
                  Question - ${quizeNo}
              </div>
              <div class="question">
                  ${question}
              </div>
              <div class="answers">
                <button class="answer-btn js-answer-btn" data-answer=${0} >${answers[0]}</button>
                <button class="answer-btn js-answer-btn" data-answer=${1}>${answers[1]}</button>
                <button class="answer-btn js-answer-btn" data-answer=${2}>${answers[2]}</button>
                <button class="answer-btn js-answer-btn" data-answer=${3}>${answers[3]}</button>
              </div>
    `;
    document.querySelector(".js-main").innerHTML = quizHtml;
    testQuiz(rightAnswer);
  }
}

function testQuiz(righAnswer) {
  document.querySelectorAll('.js-answer-btn').forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
      const answer = Number(btn.dataset.answer);
      if(answer === righAnswer){
        btn.classList.add('correct-answer');
        quizIndex += 1;
        quizMarks += 1;
        btnDisable()
      }
      else{
        btn.classList.add('wrong-answer');
        document.querySelectorAll('.js-answer-btn').forEach((correctBtn)=>{
          if(correctBtn.dataset.answer == righAnswer){
            correctBtn.classList.add('correct-answer');
          }
        })
        quizIndex += 1;
        btnDisable()
      }
      
    })
  })
}



function btnDisable(){
  document.querySelectorAll('.js-answer-btn').forEach((btn)=>{
    btn.disabled = true;
  })
}

function calculateMarks(){
  const marksPreceentage = (quizMarks/5)*100;
  return marksPreceentage;
}