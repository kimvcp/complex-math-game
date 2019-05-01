<template>
  <div class= "quetion-container">
      <GameHeader 
      v-bind:numCorrect="numCorrect"
      v-bind:numIncorrect="numIncorrect"
      v-bind:numTotal="numTotal"
      v-bind:tableNumber="tableNumber"
      v-bind:resultQuestions="resultQuestions"
      />
      <QuestionBox
        v-if="questions.length"
        v-bind:currentQuestion="questions[index]"
        v-bind:next="next"
        v-bind:increment="increment"
      />
  </div>
</template>
<script>

import GameHeader from "../components/layout/GameHeader"
import QuestionBox from "../components/QuestionBox"
import APIService from "../APIService";

export default {
    name: "Game",
    components: {
      QuestionBox,
      GameHeader
    },
    // props pass by the parent
    props: [
      "tableNumber",
    ],
    //attributes of the class
    data(){
      return{
        questions: [],
        resultQuestions: [],
        index: 0,
        numCorrect: 0,
        numIncorrect: 0,
        numTotal: 0,
      }
    },
    methods: {
      // change to the next question
      next() {
        this.index++
      },
      // counter method
      increment(isCorrect) {
        if(isCorrect){
          this.numCorrect++;
        }
        else{
          this.numIncorrect++;
        }
        this.numTotal++;
        this.resultQuestions[this.index] = this.questions[this.index]
      },
    },

    // get the api at the time page starts
    async created() {
      try {
        this.questions = await APIService.getMultiplication(this.tableNumber);
      } catch (err) {
        this.err = err.message;
      }
    },

}
</script>

<style scoped>

  .m{
    margin: 10px;
  }
  .bg{
   background: lightgray
}

</style>




