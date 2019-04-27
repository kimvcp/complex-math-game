<template>
    <b-button variant="light" v-bind:game="game" to="game">   
        <span style="margin-right: 80px">Multiplication Table: {{card._id}}</span>
        <span>High Score: {{card.text}}</span>
    </b-button> 
</template>

<script>
export default {
    name: "Card",
    props: ['card', 'highScore'],
    data() {
      return {
      } 
    },

}
</script>

<style>

</style>


