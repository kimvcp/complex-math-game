<template>
  <div>
    <TableCards v-bind:tableCards="tableCards" />
  </div>
</template>

<script>
import TableCards from '../components/TableCards';
import PostService from "../PostService";

export default {
  name: 'Home',
  components: {
    TableCards
  },
    data() {
      return {
        tableCards: [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12],
        questions: [],
        error: "",
      }
    },
    async created() {
      try {
        this.questions = await PostService.getPosts();
      } catch (err) {
        this.err = err.message;
      }
    },
    }
  
</script>