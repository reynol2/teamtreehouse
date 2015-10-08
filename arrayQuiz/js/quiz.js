var quiz = [
  ["How many: Feet in one mile?", 5280],
  ["How many: Ounces in a pound?", 16],
  ["How many: Quarts in a gallon?", 4]
];
var answeredCorrectly = [];
var answeredIncorrectly = [];

function print(message) {
//  document.write('<p>' + message + '</p>');
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

function askQuestions(quiz) {
  var answer = '';
  var correct = 0;
  for (var i = 0; i < quiz.length; i += 1) {
    answer = prompt(quiz[i][0]);
    if ( quiz[i][1] === parseInt(answer) ) {
      correct += 1;
      answeredCorrectly.push(quiz[i][0]);
    } else {
      answeredIncorrectly.push(quiz[i][0]);
    }
  }
  html = "You got " + correct + " of " + quiz.length + " questions correct.";
  html += "<h2>You got these questions correct:</h2>";
  html += buildList(answeredCorrectly);
  html += "<h2>You got these questions wrong:</h2>";
  html += buildList(answeredIncorrectly);
  print(html);
}

askQuestions(quiz);