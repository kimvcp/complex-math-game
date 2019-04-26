<template>
    <header class="header">
        <div id="nav">
            <router-link to="/"><h1>Complex Math Game</h1></router-link> 
            <router-link to="/game">Game</router-link>| 
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
        background:skyblue;
        color: #fff;
        text-align: center;
        padding: 20px
    }
    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>

