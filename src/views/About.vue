<template>
    <div>
      <h1>About Me</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        message: 'I am a software engineer.'
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
  