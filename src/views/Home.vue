<template>
    <div>
        <h1>Welcome to Home Page</h1>
        <p>{{ message }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            message: 'This is the home page'
        }
    }
}
</script>
  
<style scoped>
h1 {
    font-size: 3em;
    text-align: center;
    margin-top: 20px;
}

p {
    font-size: 2em;
    text-align: center;
    margin-top: 20px;
}
</style>
  