<template>  
    <header class="header">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">about</router-link>
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
    background-color:darkgray;
}
</style>