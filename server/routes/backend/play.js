//class for manage the game

class Play{
    constructor(number, player){

        this.number = number;
        this.player = player;
    }

    sent(){

        var QuestionList = require('./question.js');
        var ques = new QuestionList(this.number);
        
        return ques.getList();
    }
}

module.exports = Play;
