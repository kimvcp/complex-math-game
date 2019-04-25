<template>
<div>
    <div v-bind:key="tableCard.id" v-for="tableCard in tableCards">
        <Card v-bind:card = "tableCard"/>
    </div>
</div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'TableCards',
    components: {
        Card
    },
    props: ['tableCards']
}
</script>

<style scoped>

</style>
