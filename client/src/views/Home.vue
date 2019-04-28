<template>
  <div>
    <p class="error" v-if="err"> {{err}} </p>
    <div>
      <div
        class="card"
        v-for=" (card,index) in number"
          v-bind:key="index"
      > 
          <Card 
            v-bind:number="number[index]"
            v-bind:card="card"
            v-bind:highScore="highScore"
          />
      </div>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card';

export default {
  name: 'Home',
  components: {
    Card
  },
    //attributes of the class
    data() {
      return {
        number: [ 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12],
        score: "",
        status:"",
        err: "",
      }
    },
    }
  
</script>

<style scoped>
.card {
  margin: 20px;
}
</style>
