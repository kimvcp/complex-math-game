<template>
    <div class="QuestionBox-container">
    <b-jumbotron>
        <h2>{{currentQuestion.question}}</h2><br><br>

        <b-list-group>
            <b-list-group-item 
            v-for="(answer,index) in shuffledAnswers" :key="index"
            @click.prevent="selectedAnswer(index)"            
            @click="submitAnswer" 
            >
            {{answer}}
            </b-list-group-item>
        </b-list-group>
        <br>
    </b-jumbotron>
    </div>
</template>

<script>
import lodash from 'lodash'
export default {
    name: "QuestionBox",

    // props pass by the parent
    props: {
        // all the questions and answers gathered from api
        currentQuestion: Object,
        next: Function,
        increment: Function,
    },
    //attributes used only in this class
    data(){
        return{
            selectedIndex: null,
            correctIndex: null,
            shuffledAnswers: [],
            answered: false
        }
    },
    // get the answer from the api
    computed: {
        answers () {
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            return answers
        }
    },
    // everytime the question updates
    watch:{
        currentQuestion: {
            immediate: true,
            handler() {
                this.selectedIndex = null;
                this.answered = false;
                this.shuffleAnswers();
            }
        }
    },
    methods: {
        // called when clicked
        selectedAnswer (index) {
            this.selectedIndex = index
        },
        // shuffle answer everytime the question updates
        shuffleAnswers (){
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
            this.shuffledAnswers = lodash.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
        },
        // called when the submit button is clicked
        submitAnswer() {
            let isCorrect = false;
            if ( this.selectedIndex === this.correctIndex){
                isCorrect = true;
            }
            this.answered = true;
            this.increment(isCorrect);
            this.next();
        },
    }
}
</script>

<style scoped>

.list-group-item:hover{
    background: #EEE;
    cursor: pointer;
}
.btn{
    margin: 20px 20px
}
.jumbotron{
    background: white;
}
</style>

