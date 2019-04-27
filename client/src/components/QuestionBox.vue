<template>
    <div class = "QuestionBox-container">
    <b-jumbotron>
        <template slot="lead">{{currentQuestion.question}}</template>
        <hr class="my-4">
        <b-list-group>
            <b-list-group-item v-for="(answer,index) in answers" :key="index">
                {{answer}}
            </b-list-group-item>
        </b-list-group>
      
    <br>
    <b-button variant="primary" href="#" class="m">Submit</b-button>
    <b-button @click="next" variant="success" href="#">Next</b-button>
  </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: "QuestionBox",
    props: {
        currentQuestion: Object,
        next: Function,
    },
    computed: {
        answers () {
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            return answers
        }
    },
    mounted(){

    }
}
</script>

