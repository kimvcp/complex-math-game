<template>
  <div>
    <p class="error" v-if="error">{{error}}</p>
    <div>
      <div
        class="card"
        v-for=" card in tableCards"
        v-bind:key="card"
      > 
        <Card 
          v-bind:card="card"
          v-bind:highScore="highScore" />
      </div>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card';
import PostService from "../PostService";

export default {
  name: 'Home',
  components: {
    Card
  },
    data() {
      return {
        tableCards: [ 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12],
        highScore: "999",
        questions: [],
        err: "",
      }
    },
    async created() {
      try {
        this.questions = await PostService.getPosts();
      } catch (err) {
        this.err = err.message;
      }
    },
    }
  
</script>

<style scoped>
.card {
  margin: 20px;
}
</style>
