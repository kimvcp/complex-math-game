<template>
    <div class="QuestionBox-container">
    <b-jumbotron>
        <template slot="lead">{{currentQuestion.question}}</template>
        <hr class="my-4">

        <b-list-group>
            <b-list-group-item 
            v-for="(answer,index) in shuffledAnswers" :key="index"
            @click.prevent="selectedAnswer(index)"            
            :class="answerClass(index)
            ">
            {{answer}}
            </b-list-group-item>
        </b-list-group>
        <br>

        <b-button 
            @click="submitAnswer" 
            variant="primary"
            v-bind:disabled="selectedIndex === null || answered"
        >
            Submit
        </b-button>
        <b-button 
            @click="next" 
            variant="success">
            Next
        </b-button>
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
    data: function(){
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
        },
        answerClass(index){
            let answerClass = '';
            if(!this.answered && this.selectedIndex === index){
                answerClass = 'selected';
            }else if( this.answered && this.correctIndex === index){
                answerClass = 'correct';
            }else if( this.answered && this.selectedIndex === index && this.correctIndex !== index)
                answerClass = 'incorrect';

            return answerClass
        },

    }
}
</script>

<style scoped>

.list-group{
    margin-bottom: 10px
}
.list-group-item:hover{
    background: #EEE;
    cursor: pointer;
}
.btn{
    margin: 0 5px
}
.jumbotron{
    background: white;
}
.selected{
    background-color: lightblue;
}
.correct{
    background-color: lightgreen;
}
.incorrect{
    background-color: lightcoral;
}
</style>

