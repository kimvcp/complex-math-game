<template>
    <v-card-title class="secondary justify-center">
        {{timer}}
    </v-card-title>
</template>

<script>
export default {
    name: 'Timer',
    props: ['timer','state']
}
</script>