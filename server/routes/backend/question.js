//strategy pattern

/** Class to create many question type.*/
class QuestionMaker {

    constructor(ques){
        this.ques = ques;
    }

    setInstance(ques) { 
        QuestionMaker.instance = ques;
    }

    create() { return this.ques.getQuestion(); }
    
    answer() { return this.ques.getAnswer(); }

}

/** Create Question object by multiplicand(number) and multiplier*/
class Question {

    constructor(number, multiplier) {
        this.number = number;
        this.multiplier = multiplier;
    }

    /** return string of a question. */
    getQuestion() {
        return `${this.number} X ${this.multiplier} = ?`;
    }

    /** return answer of the question. */
    getAnswer() {
        return this.number * this.multiplier;
    }
}

/** Class to create normal multiply question */
class NormalQuestion extends Question {
    constructor(number, multiplier) {
        super(number, multiplier);
    }

}

/** Class to create advance multiply question */
class AdvanceQuestion extends Question {
    constructor() {

        var number = Math.floor(Math.random() * 15 + 2);
        var multiplier = Math.floor(Math.random() * 15 + 2);

        super(number, multiplier);
    }
}

/** Create a list of question. */
class QuestionList{
     
    constructor(number){
        this.number = number;
    }
    
    getList(){
        var list = [];
        var q, max;

        if(this.number == 99) max = 30;
        else max = 12;
        
        for(var i = 1; i <= max; i++){
 
            if(max == 30) q  = new QuestionMaker(new AdvanceQuestion());
            else q  = new QuestionMaker(new NormalQuestion(this.number, i));

            var in1 = Math.floor(Math.random() * 2 + q.answer()-2)
            var in2 = Math.floor(Math.random() * 2 + q.answer()+2)
            var in3 = Math.floor(Math.random() * 2 + q.answer()+4)

            var obj = { 
                       "question":`${q.create()}`, 
                       "correct_answer":`${q.answer()}`, 
                       "incorrect_answers":[`${in1}`, `${in2}`, `${in3}`]
                      };
            list.push(obj);
        }
        return list;
    }

}

module.exports = QuestionList;

