<template>
    <div>
        <b-card bg-variant="dark" text-variant="white" title="Table: ">
             <b-card-text>
                {{card}}
            </b-card-text>
            <b-button href="http://localhost:8080/#/game" variant="primary">Play</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["card"],
}
</script>

<style>

</style>


