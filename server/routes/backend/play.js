
//{name: jamp, number:2, score: 10, status: playing}

class Play{
    constructor(status, number, player){
        this.status = status;
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
