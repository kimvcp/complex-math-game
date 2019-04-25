class QuestionMaker {
    create(ques) { 
        return ques.getQuestion(); 
    }
}

class Question {
    constructor(number, multiplexer) {
        this.number = number;
        this.multiplexer = multiplexer;
    }

    getQuestion() {
        return `${this.number} X ${this.multiplexer} = ?`;
    }

    answer() {
        return this.number * this.multiplexer;
    }
}


class NormalQuestion extends Question {
    constructor(number, multiplexer) {
        super(number, multiplexer);
    }

}

class AdvanceQuestion extends Question {
    constructor() {

        var number = Math.floor(Math.random() * 12 + 1);
        var multiplexer = Math.floor(Math.random() * 12 + 1);

        super(number, multiplexer);
    }
}

class QuestionList{
     
    constructor(number){
        this.number = number;
    }
    
    getList(){
        var list = [];
        for(var i = 1; i <= 12; i++){
            var q  = new Question(this.number, i);

            var obj = { 
                       "question":`${q.getQuestion()}`, 
                       "answer":`${q.answer()}`, 
                       "choice":[`${q.answer()-2}`, `${q.answer()}`, `${q.answer()+2}`, `${q.answer()+4}`]
                      };
            list.push(obj);
        }
        return list;
    }

}

module.exports = QuestionList;

