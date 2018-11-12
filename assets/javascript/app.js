// 1. Presionas el botón de ‘Start” y comienza el juego

window.onload = function() {
$("#scoreboard").hide();
  $("#start").on("click", startGame);
  $("#start").on("click", hideAndShow);
  $("#done").on("click", done);
};

function hideAndShow() {
  $("#start").hide();
  $("#triviaQuestions").show();
}

// 2. Se crea un timer de por ejemplo 30 segundos
var intervalId;
var questions = 10;
var number = 30;

function startGame() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").text(" " + number);

  if (number === 0) {
    stop();
  }
}

// Si el tiempo se acaba
function stop() {
  clearInterval(intervalId);
  $("#scoreHeader").text("Time's up!!");
  checkAnswers();
}

// Si le dan click al botón de DONE
function done() {
  clearInterval(intervalId);
  $("#scoreHeader").text("All Done!!");
  checkAnswers();
}

function checkAnswers() {
  var i = 0;
  correct = 0;
  wrong = 0;
  noAnswer = 0;

    // 1. Pregunta
    var answerChosen = "noAnswer"; 
  for (i = 0; i < 4; i++) {
    if (questionOne[i].defaultValue === "Clark Kent" && questionOne[i].checked)
        answerChosen = "correct";
    else if(questionOne[i].checked)
        answerChosen = "incorrect";
  };

  if(answerChosen == "correct")
    correct++;
  else if(answerChosen == "incorrect")
    wrong++;
  else 
    noAnswer++;

  // 2. Pregunta

var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
  if (questionTwo[i].defaultValue === "Barry Allen" && questionTwo[i].checked)
      answerChosen = "correct";
  else if(questionTwo[i].checked)
      answerChosen = "incorrect";
};

if(answerChosen == "correct")
  correct++;
else if(answerChosen == "incorrect")
  wrong++;
else 
  noAnswer++;

  // 3. Pregunta

  var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
  if (questionThree[i].defaultValue === "Bruce Wayne" && questionThree[i].checked)
      answerChosen = "correct";
  else if(questionThree[i].checked)
      answerChosen = "incorrect";
};

if(answerChosen == "correct")
  correct++;
else if(answerChosen == "incorrect")
  wrong++;
else 
  noAnswer++;

  // 4. Pregunta

  var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
  if (questionFour[i].defaultValue === "Hal Jordan" && questionFour[i].checked)
      answerChosen = "correct";
  else if(questionFour[i].checked)
      answerChosen = "incorrect";
};

if(answerChosen == "correct")
  correct++;
else if(answerChosen == "incorrect")
  wrong++;
else 
  noAnswer++;

  // 5. Pregunta

  var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
  if (questionFive[i].defaultValue === "Diana" && questionFive[i].checked)
      answerChosen = "correct";
  else if(questionFive[i].checked)
      answerChosen = "incorrect";
};

if(answerChosen == "correct")
  correct++;
else if(answerChosen == "incorrect")
  wrong++;
else 
  noAnswer++;

  // 6. Pregunta

  var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
  if (questionSix[i].defaultValue === "Billy Batson" && questionSix[i].checked)
      answerChosen = "correct";
  else if(questionSix[i].checked)
      answerChosen = "incorrect";
};

if(answerChosen == "correct")
  correct++;
else if(answerChosen == "incorrect")
  wrong++;
else 
  noAnswer++;

// 7. Pregunta

var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
    if (questionSeven[i].defaultValue === "Raymond Palmer" && questionSeven[i].checked)
        answerChosen = "correct";
    else if(questionSeven[i].checked)
        answerChosen = "incorrect";
};

if(answerChosen == "correct")
    correct++;
else if(answerChosen == "incorrect")
    wrong++;
else 
    noAnswer++;
 
// 8. Pregunta

var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
    if (questionEight[i].defaultValue === "Victor Stone" && questionEight[i].checked)
        answerChosen = "correct";
    else if(questionEight[i].checked)
        answerChosen = "incorrect";
};

if(answerChosen == "correct")
    correct++;
else if(answerChosen == "incorrect")
    wrong++;
else 
    noAnswer++;

// 9. Pregunta

var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
    if (questionNine[i].defaultValue === "Oliver Queen" && questionNine[i].checked)
        answerChosen = "correct";
    else if(questionNine[i].checked)
        answerChosen = "incorrect";
};

if(answerChosen == "correct")
    correct++;
else if(answerChosen == "incorrect")
    wrong++;
else 
    noAnswer++;

// 10. Pregunta

var answerChosen = "noAnswer"; 
for (i = 0; i < 4; i++) {
    if (questionTen[i].defaultValue === "Rex Mason" && questionTen[i].checked)
        answerChosen = "correct";
    else if(questionTen[i].checked)
        answerChosen = "incorrect";
};

if(answerChosen == "correct")
    correct++;
else if(answerChosen == "incorrect")
    wrong++;
else 
    noAnswer++;

  $("#triviaQuestions").hide();
  $("#scoreboard").show();

  // Imprimir en el HTML el score
  var noAnswer = 10 - (correct + wrong);
  $("#correctAnswers").text(" " + correct);
  $("#incorrectAnswers").text(" " + wrong);
  $("#unanswered").text(" " + noAnswer);
}