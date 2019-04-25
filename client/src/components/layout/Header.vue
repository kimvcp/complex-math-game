<template>
    <header class="header">
        <h1>Complex Math Game</h1>
        <div id="nav">
            <router-link to="/">Math Table</router-link> |
            <router-link to="/game">Game</router-link> |
            <router-link to="/score">Score</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header{
        background:blue;
        color: #fff;
        text-align: center;
        padding: 10px
    }
    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>

