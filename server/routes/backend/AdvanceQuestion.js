class AdvanceQuestion {
  constructor() {}

  //create multiplication questions from one to twelve
  create(unused_paramter) {
    var questions = [];
    var MAX = 12;

    for (var number = 2; number <= MAX; number++) {
      for (var multiplier = 1; multiplier <= MAX; multiplier++) {
        var question = `${number} X ${multiplier} = ? `;
        var answer = number * multiplier;
        var choice1 = Math.floor(Math.random() * 2 + answer - 2);
        var choice2 = Math.floor(Math.random() * 2 + answer + 2);
        var choice3 = Math.floor(Math.random() * 2 + answer + 4);
        var tempQuestion = {
          question: question,
          correct_answer: answer,
          incorrect_answers: [choice1, choice2, choice3]
        };
        questions.push(tempQuestion);
      }
    }
    return questions;
  }
}

module.exports = AdvanceQuestion;
