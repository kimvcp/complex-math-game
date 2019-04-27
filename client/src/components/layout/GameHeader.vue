<template>

    <h4><br>Counter : {{ numCorrect }} / {{numTotal}}</h4>
</template>

<script>
export default {
    name: "GameHeader",
    props: [   
        'numCorrect',
        'numTotal'
        ]
}
</script>

<style scoped>
    .header{
        background: white;
        text-align: center;
        padding: 20px
    }
</style>

