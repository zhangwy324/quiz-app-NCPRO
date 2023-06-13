import { questions } from "./questions/questions.js";

let ul = document.getElementById("ul");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
let questionBox = document.getElementById("questionBox");
let optA = document.getElementById("optA");
let optB = document.getElementById("optB");
let optC = document.getElementById("optC");
let optD = document.getElementById("optD");
let answerText = document.getElementById("answer");
let explanationText = document.getElementById("explanation");
let contributorText = document.getElementById("contributor");
const correctAudio = new Audio("./sounds/cheer.wav");
const wrongAudio = new Audio("./sounds/disappointed.mp3");

// index of current question
let index = 0;

// load question
function load() {
  document.body.style.backgroundColor = "white";
  for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].style.backgroundColor = "lightgray";
  }
  questionBox.innerHTML = index + 1 + ". " + questions[index].question;
  optA.innerHTML = "A. " + questions[index].choices[0];
  optB.innerHTML = "B. " + questions[index].choices[1];
  optC.innerHTML = "C. " + questions[index].choices[2];
  optD.innerHTML = "D. " + questions[index].choices[3];
  contributorText.innerHTML = "Contributor: " + questions[index].author;
  clearInfo();
}

// clear answer and explanation
function clearInfo() {
  answerText.innerText = "";
  explanationText.innerText = "";
}

// show answer and explanation
function showInfo() {
  answerText.innerText = "Correct Answer: " + questions[index].answer;
  explanationText.innerText = questions[index].explanation ? questions[index].explanation : "";
}

// next question
function next() {
  index = (index + 1) % questions.length;
  load();
}

// previous question
function prev() {
  index = index - 1;
  if (index < 0) {
    index = questions.length + index;
  }
  load();
}

// check answer
function check(e) {
  const id = e.srcElement.id.split("");
  if (id[id.length - 1] == questions[index].answer) {
    console.log("correct");
    e.srcElement.style.backgroundColor = "lightgreen";
    correctAudio.play();
  } else {
    console.log("wrong");
    e.srcElement.style.backgroundColor = "red";
    window["opt" + questions[index].answer].style.backgroundColor = "lightgreen";
    wrongAudio.play();
  }
  showInfo();
}

// disable options
function disableOptions() {
  for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].style.pointerEvents = "none";
  }
}

// enable options
function ableOptions() {
  for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].style.pointerEvents = "auto";
  }
}

// Event bind to the options
// choose an option
function choose(e) {
  stopAudios();
  check(e);
  disableOptions();
}

// click prev/next button
function control(e) {
  const id = e.srcElement.id;
  if (id == "prevButton") {
    prev();
  } else {
    next();
  }
  ableOptions();
}

// stop audio
function stopAudios() {
  correctAudio.currentTime = 0;
  correctAudio.pause();
  wrongAudio.currentTime = 0;
  wrongAudio.pause();
}

// load first question and bind all events
load();
optA.addEventListener("click", choose);
optB.addEventListener("click", choose);
optC.addEventListener("click", choose);
optD.addEventListener("click", choose);
nextButton.addEventListener("click", control);
prevButton.addEventListener("click", control);
