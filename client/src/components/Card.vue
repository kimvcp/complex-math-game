<template>
    <b-button 
        variant="light" 
        v-bind:game="game" 
        v-bind:score="score"
        :to= "{ name: 'game' , params: { cardNumber }}"
    >
        <span style="margin-right: 90px"> Multiplication Table: <b>{{number}}</b></span>
        <span>High Score: {{highScore}} </span>
    </b-button > 
</template>

<script>
export default {
    name: "Card",

    // props pass by the parent 
    props: {
        highScore: Object,
        number: Object
    },
    // attribute of the class
    data() {
      return {
        cardNumber: this.number,
      }
    },
}
</script>

<style>

</style>


