const quiz=[
  {
    question:"Q1:What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hyper Text Markup Language",
    c:"High Text Machine Language",
    d:"None of the above",
    ans:"ans2",
  },
  {
    question:"Q1:What is the full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Color and Style Sheets",
    c:"Cascade Style Sheets",
    d:"None of the above",
    ans:"ans1",
  },
  {
    question:"Q1:What is the full form of JS?",
    a:"Java Scale",
    b:"Java Super",
    c:"Java Script",
    d:"None of the above",
    ans:"ans3",
  },
  {
    question:"Q1:What is the full form of HTTP?",
    a:"Hyper To Transfer Protocol",
    b:"Hyper Text Transfer Protocol",
    c:"Hello Transfer Text Protocol",
    d:"None of the above",
    ans:"ans2",
  },
];

let score=0;
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#button1');
const showScore=document.querySelector('#showScore')
const answers=document.querySelectorAll('.answer');
 let c=0;
const loadq = () =>{
  const questionList=quiz[c];
  question.innerHTML=questionList.question;

  option1.innerHTML=questionList.a;
  option2.innerHTML=questionList.b;
  option3.innerHTML=questionList.c;
  option4.innerHTML=questionList.d;
}
loadq();

const getCheck = () =>{
  let answer;
  answers.forEach((curr) => {
    if(curr.checked){
      answer=curr.id;
  }
});
return answer;
};

const deselectAll =() =>
{
  answers.forEach((curr)=> curr.checked=false);
  
}
submit.addEventListener('click',() =>{
  const checkAnswer=getCheck();
  console.log(checkAnswer);
  if(checkAnswer===quiz[c].ans){
    score++;
  };
  c++;
  deselectAll();
  if(c<quiz.length)
  {
    loadq();

  }
  else{
    showScore.innerHTML=`
    <h3>you scored ${score}/${quiz.length} </h3>
    <button class="btn" onclick="location.reload()">play again </button>
`;
showScore.classList.remove('scoreArea');
  }

});

  
