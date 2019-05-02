class NormalQuestion {
  constructor() {}

  //create multiplication questions with the receive number
  create(number) {
    var questions = [];
    var MAX = 12;

    for (var multiplier = 1; multiplier <= MAX; multiplier++) {
      var question = `${number} X ${multiplier} = ? `;
      var answer = number * multiplier;
      var choice1 = Math.floor(Math.random() * 2 + answer - 2);
      var choice2 = Math.floor(Math.random() * 2 + answer + 2);
      var choice3 = Math.floor(Math.random() * 2 + answer + 4);
      var tempQuestion = {
        question: question,
        correct_answer: answer,
        incorrect_answer: [choice1, choice2, choice3]
      };
      questions.push(tempQuestion);
    }
    return questions;
  }
}

module.exports = NormalQuestion;
