<template>
  <div class= "quetion-container">
      <GameHeader 
      v-bind:numCorrect="numCorrect"
      v-bind:numTotal="numTotal"
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
export default {
    name: "Game",
    components: {
      QuestionBox,
      GameHeader
    },
    data(){
      return{
        questions: [],
        index: 0,
        numCorrect: 0,
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
        this.numTotal++;
      },
    },
    // fetch the api at the beginning 
    mounted: function(){
      fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple',{
        method : 'get'
      })
      .then( (response) => {
        return response.json();
      })
      .then( (jsonData) => {
        this.questions = jsonData.results
      })
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




