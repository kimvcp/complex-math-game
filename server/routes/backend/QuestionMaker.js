class QuestionMaker {
  constructor() {
    this.strategy = "";
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  //create questions with the current strategy
  create(number) {
    return this.strategy.create(number);
  }
}

module.exports = QuestionMaker;
