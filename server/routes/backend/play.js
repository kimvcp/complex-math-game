
//{name: jamp, number:2, score: 10, status: playing}

class Play{
    constructor(status, number, player){
        this.status = status;
        this.number = number;
        this.player = player;
    }

    highScore(){
        var score = this.player.getScore();
        var highScore = 0; //get from db.
        if(score > highScore){
           highScore = score;
        }
        return highScore;
    }

    sent(){
        var snt = '';

        var QuestionList = require('./question.js');
        var ques = new QuestionList(this.number);
        
        if(this.status == "end"){
           snt = {
               "number": this.number,
               "high score": this.highScore(),
               "name": this.player.getName()
           }
        } else if(this.status == "playing"){
            snt = ques.getList();
            console.log(snt);
        }
        return snt;
    }
}

module.exports = Play;
