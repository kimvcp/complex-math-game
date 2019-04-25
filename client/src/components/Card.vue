<template>
    <b-button href="http://localhost:8080/#/game" variant="light">   
        <b-card-text>
            {{card}}
        </b-card-text>
    </b-button>
</template>

<script>
export default {
    name: "Card",
    props: ["card"],
}
</script>

<style>

</style>


