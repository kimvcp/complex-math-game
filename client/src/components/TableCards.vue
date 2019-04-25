<template>
<div>
    <p class="error" v-if="error">{{error}}</p>
    <div>
      <div
        class="card"
        v-for=" card in tableCards"
        v-bind:key="card"
      >        
        <Card v-bind:card="card" />
      </div>
    </div>
</div>
</template>


<script>
import Card from './Card.vue'

export default {
    name: 'TableCards',
    components: {
        Card,
    },
    props: ['tableCards', 'error'],

}
</script>

<style scoped>

.card {
  margin: 15px;
}

</style>
