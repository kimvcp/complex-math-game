<template>
  <div>
    <TableCards v-bind:tableCards="tableCards"/>
  </div>
</template>

<script>
import TableCards from '../components/TableCards';

export default {
  name: 'Home',
  components: {
    TableCards
  },
    data() {
    return {
      tableCards: [
        "2",
        "3",
        "4",
      ]
    }
  }
}
</script>
