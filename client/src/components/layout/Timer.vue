<template>
    <div class="secondary white--text font-weight-light display-2 text-uppercase justify-center">
        <h1>Timer: {{timer}}</h1>
    </div>
</template>

<script>
export default {
    name: 'Timer',
    props: ['timer','state']
}
</script>