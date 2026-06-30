const questions=[
  {
    question: "How many days are there in a normal year?",
    options: [
      "360 Days",
      "365 Days",
      "366 Days",
      "300 Days"
    ],
    answer: "365 Days"
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: [
      "Elephant",
      "Tiger",
      "Lion",
      "Leopard"
    ],
    answer: "Lion"
  },
  {
    question: "What is the color of the sky on a clear day?",
    options: [
      "Green",
      "Blue",
      "Red",
      "Yellow"
    ],
    answer: "Blue"
  },
  {
    question: "How many hours are there in one single day?",
    options: [
      "12 Hours",
      "24 Hours",
      "48 Hours",
      "50 Hours"
    ],
    answer: "24 Hours"
  },
  {
    question: "Which planet do we live on?",
    options: [
      "Mars",
      "Venus",
      "Earth",
      "Jupiter"
    ],
    answer: "Earth"
  },
  {
    question: "What is the capital of India?",
    options: [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Patna"
    ],
    answer: "New Delhi"
  },
  {
    question: "How many letters are there in the English Alphabet?",
    options: [
      "20 Letters",
      "25 Letters",
      "26 Letters",
      "30 Letters"
    ],
    answer: "26 Letters"
  },
  {
    question: "Which fruit is known as the 'King of Fruits' in India?",
    options: [
      "Apple",
      "Banana",
      "Mango",
      "Orange"
    ],
    answer:"Mango"
  },
  {
    question: "What do we get from the Sun during the day?",
    options:[
      "Water",
      "Light and Heat",
      "Food",
      "Air"
    ],
    answer: "Light and Heat"
  }
];
//current question 
let current=0;
//score 
let score=0;
//options select 
let select="";
//button hide and show 
let btn=document.getElementById("btn");
//Display show
let showItems=document.getElementById("show");
function Next(){
  if(select === questions[current].answer){
    score++;
    document.getElementById("score").innerText=score;
  }
  current++;
  if(current>=questions.length){
    showItems.innerHTML=`
    <div class="question">
<h2>🎉 Congratulations Users</h2>

<h4>Quiz Completed Successfully.</h4>

<h3>Final Score</h3>

<h3>${score}/${questions.length}</h3>

    <div class="result">
    <button onclick='restart()'>Restart</button>
    </div>
    </div>
    `;
    btn.style.display="none";
  }
  else{
    update();
  }
  document.getElementById("Total").innerText=current;
}
function restart(){
  current=0;
  score=0;
  select="";
document.getElementById("score").innerText=score;
btn.style.display="flex";
document.getElementById("Total").innerHTML=0;
update();
}
function update(){
  showItems.innerHTML=`
  <div class="question">
  <p>${questions[current].question}</p>
  <div class="quiz-btn">
  <button>${questions[current].options[0]}</button>
  <button>${questions[current].options[1]}</button>
  <button>${questions[current]. options[2]}</button>
  <button>${questions[current].options[3]}</button>
  </div>
  </div>
  `;
let buttons=document.querySelectorAll(".quiz-btn button");
buttons.forEach(button=>{
  button.addEventListener("click",()=>{
buttons.forEach(btn =>{
  btn.classList.remove("active");
});
button.classList.add("active");
select=button.innerHTML;
console.log(select);
  });
});
}
update();