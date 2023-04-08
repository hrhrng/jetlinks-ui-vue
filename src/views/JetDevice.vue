<!-- Device.vue -->
<template>
    <CommonList title="Device" apiEndpoint="/api/devices" />
  </template>
  
  <script>
  import CommonList from './CommonList.vue';
  
  export default {
    components: {
      CommonList,
    },
  };
  </script>
  