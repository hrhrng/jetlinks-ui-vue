<!-- Device.vue -->
<template>
    <CommonList title="Protocol" apiEndpoint="/api/devices" />
  </template>
  
  <script>
  import CommonList from './CommonList.vue';
  
  export default {
    components: {
      CommonList,
    },
  };
  </script>
  