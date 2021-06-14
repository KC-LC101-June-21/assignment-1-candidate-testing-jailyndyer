const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ["", "", "", "", ""];

function askForName() {
  // // TODO 1.1b: Ask for candidate"s name //
   let candidateName = input.question("Please enter your name: ");
  console.log(`Candidate Name: ${candidateName}\n`);
}

function askQuestion(candidateAnswers) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer

  // question = "Who was the first American woman in space? ";
  // correctAnswer = "Sally Ride";
  candidateAnswer = input.question(question);
  console.log(`Your answer: ${candidateAnswer}`);
  console.log(`Correct Answer: ${correctAnswer}\n`);
  candidateAnswers[0] = candidateAnswer;
  
  // TODO 1.2b Ask each question and store the user's responses within a loop. 
  for (i = 1; i < candidateAnswers.length; i++)
  {
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
  let grade = 0;
 
  for (i = 0; i < candidateAnswers.length; i++)
  {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase())
    {
      grade += 20;
    }
  }
  console.log(`>>> Overall Grade: ${grade} (${grade/20} of 5 responses correct) <<<`);
  return grade;
}

function runProgram() {
  askForName();
  let grade = gradeQuiz(askQuestion(candidateAnswers));

  if (grade >= 80)
  {
    console.log(">>> Status: PASSED <<<")
  }
  else
  {
    console.log(">>> Status: FAILED <<<")
  }
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