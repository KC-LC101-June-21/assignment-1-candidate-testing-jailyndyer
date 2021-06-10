const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers ;
let candidateAnswers;

function askForName() {
  // // TODO 1.1b: Ask for candidate"s name //
   let candidateName = input.question("Please enter your name: ");
  console.log("Hello, " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
  correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
  candidateAnswers = ["", "", "", "", ""];

  for (i = 0; i < candidateAnswers.length; i++)
  {
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your answer: ${candidateAnswers[i]}.`);
    console.log(`Correct Answer: ${correctAnswers[i]}.`);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade;
 
//   >>> Overall Grade: 40% (2 of 5 responses correct) <<<
// >>> Status: FAILED <<<

  return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}