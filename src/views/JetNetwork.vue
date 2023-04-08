<!-- Device.vue -->
<template>
    <CommonList title="网络组件" apiEndpoint="/api/networks" />
</template>
  
<script>
import CommonList from './CommonList.vue';

export default {
    components: {
        CommonList,
    },
};
</script>
  