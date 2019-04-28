<template>
    <header class="header">
        <div id="nav">
            <router-link to="/"><h1>Complex Math Game</h1></router-link> 
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
        background: #3862e0;
        color: #fff;
        text-align: center;
        padding: 10px
    }
    .header a{
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>

