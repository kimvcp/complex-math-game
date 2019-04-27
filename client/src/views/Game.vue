<template>
<div class= "quetion-container">
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <QuestionBox 
          v-if="questions.length"
          v-bind:currentQuestion="questions[index]"
          v-bind:next="next"
        />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>

import QuestionBox from "../components/QuestionBox"
export default {
    name: "Game",
    components: {
      QuestionBox
    },
    data(){
      return{
        questions: [],
        index: 0,
      }
    },
    methods: {
      next() {
        this.index++
      }
    },
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

</style>




