class NormalQuestion {
  constructor() {}

  //create multiplication questions with the receive number
  create(number) {
    var questions = [];
    var MAX = 12;

    for (var multiplier = 1; multiplier <= MAX; multiplier++) {
      for (var multiplier2 = 1; multiplier2 <= MAX; multiplier2++) {
          var question = `${number} X ${multiplier2} = ? `;
          var answer = number * multiplier2;
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

module.exports = NormalQuestion;
