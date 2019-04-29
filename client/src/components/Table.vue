<template>
    <b-button 
        variant="light" 
        :to="`/game/${tableNumbers}`"
    >
        <span style="margin-right: 90px"> Multiplication Table: <b>{{tableNumbers}}</b></span>
        <span>High Score: {{scores.highscore}} </span>
    </b-button > 
</template>

<script>
export default {
    name: "Table",

    // props pass by the parent 
    props: [
        "scores",
        "tableNumbers"
    ],
}
</script>

<style>

</style>


