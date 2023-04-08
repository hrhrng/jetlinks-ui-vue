<!-- Device.vue -->
<template>
    <CommonList title="Product" apiEndpoint="/api/product" />
  </template>
  
  <script>
  import CommonList from './CommonList.vue';
  
  export default {
    components: {
      CommonList,
    },
  };
  </script>
  