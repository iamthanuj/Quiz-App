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


const startBtn = document.querySelector('.js-start-btn');

startBtn.addEventListener('click',()=>{
  document.querySelector('.js-quize-screen').classList.remove('screen-off');
  document.querySelector('.front-screen').classList.add('screen-off');
  document.querySelector('body').classList.add('quize-screen-body');

})

