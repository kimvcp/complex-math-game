<template>
    <b-button variant="light" v-bind:game="game" to="game">   
        <span style="margin-right: 80px">Multiplication Table: {{card}}</span>
        <span>High Score: {{highScore}}</span>
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


